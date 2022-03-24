import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {IoSunny, IoMoon} from "react-icons/io5"


function DarkModeToggle(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      className="w-5 h-5"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && (
        <>
          {theme === "dark" ? (
            <IoMoon size={20}/>
          ) : (
            <IoSunny size={20}/>
          )}
        </>
      )}
    </button>
  );
}

export default DarkModeToggle;
