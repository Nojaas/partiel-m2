"use client";

import React from "react";
import { MembershipsRepartition } from "./MembershipsRepartition";
import { ActiveMembers } from "./ActiveMembers";
import { SatisfactionRating } from "./SatisfactionRating";
import { RevenueSummary } from "./RevenueSummary";

const Analytics: React.FC = () => {
  return (
    <div className="w-full h-full p-8 pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
        <MembershipsRepartition />
        <ActiveMembers />
        <SatisfactionRating />
      </div>
      <RevenueSummary />
    </div>
  );
};

export default Analytics;
