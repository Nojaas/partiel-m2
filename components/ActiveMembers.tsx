"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  { month: "January", membres: 186 },
  { month: "February", membres: 305 },
  { month: "March", membres: 237 },
  { month: "April", membres: 73 },
  { month: "May", membres: 209 },
  { month: "June", membres: 214 },
];

const chartConfig = {
  membres: {
    label: "membres",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ActiveMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Membres actifs</CardTitle>
        <CardDescription>Moyenne des membres actifs mensuel</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="membres" fill="var(--color-membres)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          +5% vs. mois précédent
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Membres actifs sur les 6 derniers mois
        </div>
      </CardFooter>
    </Card>
  );
}
