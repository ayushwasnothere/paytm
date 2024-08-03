const express = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const userRouter = express.Router();

const signupSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  lastName: z.string().max(15),
  firstName: z.string().max(15),
});

const signinSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

userRouter.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
  const user = await User.findOne({ username: body.username });
  if (user) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
  const newUser = await User.create(body);

  await Account.create({
    userId: newUser._id,
    balance: parseInt(1 + Math.random() * 100000),
  });

  const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);
  return res.json({
    message: "User created successfully",
    token,
  });
});

userRouter.post("/signin", async (req, res) => {
  const body = req.body;
  const { success } = signinSchema.safeParse(body);
  if (!success) {
    return res.status(410).json({
      message: "Invalid username / password",
    });
  }
  const user = await User.findOne({ username: body.username });
  if (!user) {
    return res.status(411).json({
      message: "User doesn't exist",
    });
  }
  if (!(user.password === body.password)) {
    return res.status(410).json({
      message: "Invalid username / password",
    });
  }
  const token = jwt.sign({ userId: user._id }, JWT_SECRET);
  return res.json({
    message: "Signin successful",
    token,
  });
});

const updateBodySchema = z.object({
  password: z.string().min(6).optional(),
  lastName: z.string().max(15).optional(),
  firstName: z.string().max(15).optional(),
});

userRouter.put("/", authMiddleware, async (req, res) => {
  const body = req.body;
  const { success } = updateBodySchema.safeParse(body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  await User.updateOne(
    {
      _id: req.userId,
    },
    body,
  );
  res.json({
    message: "Updated successfully",
  });
});

userRouter.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    users: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = { userRouter };
