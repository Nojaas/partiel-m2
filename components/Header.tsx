"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, TreeDeciduous } from "lucide-react";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="w-full border-b border-gray-300 dark:border-gray-600 p-4 flex justify-between items-center fixed top-0 left-0 z-50 bg-slate-100 dark:bg-slate-800">
      <TreeDeciduous className="h-8 w-8 inline-block ml-2" />
      <div className="flex items-center space-x-4 mr-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
        >
          {darkMode ? (
            <Sun className="text-yellow-500" />
          ) : (
            <Moon className="text-gray-800 dark:text-gray-200" />
          )}
        </button>
        <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
          <span className="text-white font-bold">A</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
