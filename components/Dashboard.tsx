"use client";

import React from "react";
import NewMemberships from "./NewMemberships";
import MembershipTermination from "./MembershipsTermination";
import GymAttendance from "./GymAttendance";
import { SubscriptionAnalysis } from "./SubscriptionAnalysis";

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full p-8 pt-0">
      <div className="flex justify-between flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          <NewMemberships />
          <MembershipTermination />
          <GymAttendance />
        </div>
        <SubscriptionAnalysis />
      </div>
    </div>
  );
};

export default Dashboard;
