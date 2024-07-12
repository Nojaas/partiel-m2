import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function NewMemberships() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Nouveaux abonnements</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">342</p>
            <p className="text-sm text-muted-foreground">Ce mois-ci</p>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <TrendingUpIcon className="h-5 w-5" />
            <p className="text-sm font-medium">+15%</p>
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

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
