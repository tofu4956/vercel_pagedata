import { useTheme } from "next-themes";
import { FC } from "react";


export const Twitter: FC = ({children}) => {
  const { theme, setTheme } = useTheme();
  if ("dark" === String(theme)){
  return(
  <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
    {children}
  </blockquote>
  )
  }else {
    return (
    <blockquote className="twitter-tweet" data-dnt="true">
      {children}
    </blockquote>
    )
  }
}