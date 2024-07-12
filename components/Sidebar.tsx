"use client";

import React from "react";
import { HomeIcon, UsersIcon, BarChart } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 h-full border-r fixed top-0 left-0 flex flex-col items-center pt-20 dark:border-gray-700">
      <nav className="flex flex-col items-start p-4 space-y-4 w-full">
        <button
          className={`btn ${
            activeTab === "dashboard" ? "btn-active" : "btn-default btn-hover"
          }`}
          onClick={() => setActiveTab("dashboard")}
        >
          <HomeIcon
            className={`icon-default ${
              activeTab === "dashboard" ? "icon-active" : ""
            }`}
          />
          Accueil
        </button>
        <button
          className={`btn ${
            activeTab === "clients" ? "btn-active" : "btn-default btn-hover"
          }`}
          onClick={() => setActiveTab("clients")}
        >
          <UsersIcon
            className={`icon-default ${
              activeTab === "clients" ? "icon-active" : ""
            }`}
          />
          Clients
        </button>
        <button
          className={`btn ${
            activeTab === "analytics" ? "btn-active" : "btn-default btn-hover"
          }`}
          onClick={() => setActiveTab("analytics")}
        >
          <BarChart
            className={`icon-default ${
              activeTab === "analytics" ? "icon-active" : ""
            }`}
          />
          Analytique
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
