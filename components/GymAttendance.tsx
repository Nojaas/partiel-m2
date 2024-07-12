import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function GymAttendance() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Taux de fréquentation</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-bold">76%</p>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <p className="text-sm text-muted-foreground">
              +5% vs. mois précédent
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
