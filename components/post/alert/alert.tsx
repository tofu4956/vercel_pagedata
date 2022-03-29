import { FC } from "react";
import { RiInformationLine } from "react-icons/ri";

export const Alert: FC = ({ children }) => {
  return (
    <div className="p-4 m-2 rounded-2xl shadow-lg justify-start alert alert-info bg-info dark:bg-info">
      <RiInformationLine size="28" color="#000" />
      <span className="text-sky-900">{children}</span>
    </div>
  );
};
