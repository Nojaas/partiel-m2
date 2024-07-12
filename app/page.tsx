"use client";

import { useState } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Dashboard from "components/Dashboard";
import Clients from "components/Clients";
import Analytics from "components/Analytics";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8 mt-20 ml-64 flex flex-col items-center justify-center">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "clients" && <Clients />}
          {activeTab === "analytics" && <Analytics />}
        </main>
      </div>
    </div>
  );
}
