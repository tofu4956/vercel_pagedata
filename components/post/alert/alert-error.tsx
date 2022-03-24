import { FC } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

export const AlertError: FC = ({children}) =>{
  return (
    <>
      <div className="p-4 m-2 rounded-2xl shadow-lg alert alert-error justify-start bg-error dark:bg-error">
        <RiCloseCircleLine size="28" color="#000"/>
        <span className="text-red-900">{children}</span>
      </div>
    </>
  )
}