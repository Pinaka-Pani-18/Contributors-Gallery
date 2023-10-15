import { useEffect, useState } from "react";
import { HiMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";

const DarkModeSwitcher = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleDarkMode(darkTheme) {
    if (!darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function toggleDarkTheme() {
    setDarkTheme(!darkTheme);
  }

  useEffect(() => {
    toggleDarkMode(darkTheme);
  }, [darkTheme]);

  return (
    <button onClick={toggleDarkTheme}>
      {!darkTheme ? (
        <HiMoon className="text-2xl dark:text-gray2 dark:hover:text-white1" />
      ) : (
        <FiSun className="text-xl text-gray2 hover:text-black1" />
      )}
    </button>
  );
};

export default DarkModeSwitcher;
