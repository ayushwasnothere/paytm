import { useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../../config";

export const Send = () => {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  return (
    <div className="bg-slate-50 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-96 flex flex-col py-8 px-8 border-gray-100 border text-center gap-2">
        <div className="pb-10">
          <Heading label="Send Money" />
        </div>
        <Recipient name={name} />
        <div>
          <div className="text-sm font-medium text-left py-2">
            Amount (in Rs)
          </div>
          <input
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            type="number"
            className="text-sm w-full px-2 py-1 border rounded border-slate-200"
          />
        </div>
        <div className="pt-4">
          <button
            type="button"
            className="w-full text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={() => {
              axios
                .post(
                  `${BACKEND_URL}/api/v1/user/signup`,
                  {
                    to: id,
                    amount,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  },
                )
                .then((res) => {
                  alert(res.data.message);
                })
                .catch((err) => {
                  alert("Transaction Failed! Please try again later.");
                });
            }}
          >
            Initiate Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

const Recipient = ({ name }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex justify-center items-center text-white font-semibold text-lg rounded-full bg-green-500 w-10 h-10">
        {name[0].toUpperCase()}
      </div>
      <div className="font-semibold text-xl">{name}</div>
    </div>
  );
};
