import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      <Appbar />
      <div className="m-6 flex flex-col gap-6">
        <Balance />
        <Users />
      </div>
    </div>
  );
};
