"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-06-01", revenue: 378 },
  { date: "2024-06-02", revenue: 880 },
  { date: "2024-06-03", revenue: 263 },
  { date: "2024-06-04", revenue: 819 },
  { date: "2024-06-05", revenue: 228 },
  { date: "2024-06-06", revenue: 544 },
  { date: "2024-06-07", revenue: 693 },
  { date: "2024-06-08", revenue: 705 },
  { date: "2024-06-09", revenue: 918 },
  { date: "2024-06-10", revenue: 355 },
  { date: "2024-06-11", revenue: 242 },
  { date: "2024-06-12", revenue: 912 },
  { date: "2024-06-13", revenue: 211 },
  { date: "2024-06-14", revenue: 806 },
  { date: "2024-06-15", revenue: 657 },
  { date: "2024-06-16", revenue: 681 },
  { date: "2024-06-17", revenue: 995 },
  { date: "2024-06-18", revenue: 277 },
  { date: "2024-06-19", revenue: 631 },
  { date: "2024-06-20", revenue: 858 },
  { date: "2024-06-21", revenue: 379 },
  { date: "2024-06-22", revenue: 587 },
  { date: "2024-06-23", revenue: 1010 },
  { date: "2024-06-24", revenue: 312 },
  { date: "2024-06-25", revenue: 331 },
  { date: "2024-06-26", revenue: 814 },
  { date: "2024-06-27", revenue: 938 },
  { date: "2024-06-28", revenue: 349 },
  { date: "2024-06-29", revenue: 263 },
  { date: "2024-06-30", revenue: 846 },
];

const chartConfig = {
  revenue: {
    label: "Revenu",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function RevenueSummary() {
  const totalRevenue = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.revenue, 0),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Revenu mensuel total</CardTitle>
          <CardDescription>
            Suivi des revenus mensuels générés par les abonnements et les
            services
          </CardDescription>
        </div>
        <div className="flex">
          <button
            data-active={true}
            className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
          >
            <span className="text-xs text-muted-foreground">
              {chartConfig.revenue.label}
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {totalRevenue.toLocaleString()}
            </span>
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="revenue"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey="revenue" fill={`var(--color-revenue)`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
