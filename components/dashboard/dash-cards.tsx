import { IndianRupee } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function DashCards() {
  interface CardDetail {
    title: string;
    value: string;
    icon: React.ReactNode;
    description: string;
  }
  const cardsData: CardDetail[] = [
    {
      title: "Year Total",
      value: "45,432",
      icon: <IndianRupee />,
      description: "Total revenue for the current fiscal year.",
    },
    {
      title: "Monthly Average",
      value: "3,786",
      icon: <IndianRupee />,
      description: "Average revenue per month.",
    },
    {
      title: "Current Monthly (July)",
      value: "5,200",
      icon: <IndianRupee />,
      description: "Revenue generated this month so far.",
    },
  ];
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardsData.map((data, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardDescription>{data.description}</CardDescription>
            <CardTitle className="flex items-center">
              <IndianRupee className="w-5 h-5" />
              <span>{data.value}</span>
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <p className="text-xs font-medium text-muted-foreground">
              {data.description}
            </p>
          </CardFooter>
        </Card>
      ))}
    </ul>
  );
}
