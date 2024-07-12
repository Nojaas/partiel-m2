import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MembershipTermination() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Résiliations</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">17</p>
            <p className="text-sm text-muted-foreground">Ce mois-ci</p>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <TrendingDownIcon className="h-5 w-5" />
            <p className="text-sm font-medium">-25%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TrendingDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}
