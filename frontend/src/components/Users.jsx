import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/user/bulk?filter=` + filter, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUsers(res.data.users);
      });
  }, [filter]);
  return (
    <div className="flex flex-col gap-5">
      <div className="font-semibold text-xl">Users</div>
      <div>
        <input
          placeholder="Search users..."
          className="text-sm w-full h-10 px-2 py-1 border rounded border-slate-200"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4">
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

const User = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex gap-4">
          <div className="flex justify-center items-center font-semibold text-lg rounded-full bg-slate-200 w-10 h-10">
            {user.firstName[0].toUpperCase()}
          </div>
          <div className="font-medium text-lg">
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate(
              `/send?id=${user._id}&name=${encodeURIComponent(user.firstName + " " + user.lastName)}`,
            );
          }}
          label="Send Money"
        />
      </div>
    </div>
  );
};
