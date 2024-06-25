import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BarsPage = () => {
  const BarsArrays = [
    {
      name: "Dukia Gold",
      price: 10000,
    },
    {
      name: "Dukia Gold",
      price: 10000,
    },
    {
      name: "Dukia Gold",
      price: 10000,
    },
    {
      name: "Dukia Gold",
      price: 10000,
    },
    {
      name: "Dukia Gold",
      price: 10000,
    },
    {
      name: "Dukia Gold",
      price: 10000,
    },
    {
      name: "Dukia Gold",
      price: 10000,
    },
    {
      name: "Dukia Gold",
      price: 10000,
    },
  ];

  return (
    <div className="">
        


      <Card className="w-[25%] shadow-2xl">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BarsPage;
