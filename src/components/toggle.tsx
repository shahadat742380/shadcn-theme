"use client";

import * as React from "react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Toggle() {
  const {theme, setTheme } = useTheme();

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div>
      <div
      onClick={() => handleTheme()}
      className="p-3 rounded-full cursor-pointer bg-gray-300 dark:bg-gray-700">
      <Sun className={`h-[1.2rem] w-[1.2rem] scale-100 transition-all  duration-500 rotate-0 dark:rotate-90  text-gray-950 dark:text-white`} />
      </div>
    </div>
  );
}
