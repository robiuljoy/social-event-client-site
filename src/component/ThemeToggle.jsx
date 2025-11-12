import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm flex items-center gap-2 border border-gray-500 text-white bg-transparent hover:bg-gray-700 transition-all duration-300"
    >
      {theme === "dark" ? (
        <>
          <FaSun className="text-yellow-400 text-lg" />
          <span>Light</span>
        </>
      ) : (
        <>
          <FaMoon className="text-blue-400 text-lg" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
