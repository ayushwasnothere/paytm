import { Link } from "react-router-dom";

export const BottomWarning = ({ label, link, linkText }) => {
  return (
    <div className="text-sm py-1 text-gray-700 flex gap-1 justify-center">
      {label}
      <Link className="underline" to={link}>
        {linkText}
      </Link>
    </div>
  );
};
