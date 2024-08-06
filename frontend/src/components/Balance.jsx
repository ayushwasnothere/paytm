import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {
  const [balance, setBalance] = useState();
  const fetchBalance = () => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setBalance(res.data.balance);
      });
  };
  useEffect(() => {
    fetchBalance();
  }, []);
  return (
    <div className="flex items-center gap-4">
      <div className="font-semibold text-xl">Your Balance:</div>
      <div className="font-semibold text-xl">$ {balance}</div>
      <button
        onClick={() => {
          fetchBalance();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
};
