import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="ml-4 px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </>
  );
};

export default ThemeToggle;
