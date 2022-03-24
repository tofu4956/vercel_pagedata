import { FC } from "react";
import { RiErrorWarningLine } from "react-icons/ri";

export const AlertWarn: FC = ({children}) =>{
  return (
    <>
      <div className="p-4 m-2 rounded-2xl shadow-lg alert alert-warn justify-start bg-warning dark:bg-warning">
        <RiErrorWarningLine size="28" color="#000"/>
        <span className="text-amber-900">{children}</span>
      </div>
    </>
  )
}