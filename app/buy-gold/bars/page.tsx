"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Bar {
  key: number;
  title: string;
  imageFront: string;
  imageBack: string;
}

interface BarCardProps {
  bar: Bar;
  isFront: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleClick: () => void;
}

interface BarsPageProps {
  searchTerm: string;
}

const BarCard: React.FC<BarCardProps> = ({
  bar,
  isFront,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}) => {
  return (
    <Card
      key={bar.key}
      className="shadow-lg pt-5 border-none rounded-2xl flex flex-col items-center w-[100%] gap-5"
    >
      <CardHeader>
        <CardTitle className="text-center">{bar.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={isFront ? bar.imageFront : bar.imageBack}
          alt={bar.title}
          width={350}
          height={350}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="cursor-pointer"
        />
      </CardContent>
      <CardFooter className="relative w-full rounded-b-2xl">
        <div className="absolute inset-0 bg-black/[6%] blur w-full h-full"></div>
        <div className="pt-5 w-full h-full inset-0 text-dukiaGold text-center">
          <p className="text-sm">
            Please call{" "}
            <span className="font-bold text-base underline">
              +234 703 323 8121
            </span>{" "}
            or send an email to{" "}
            <span className="font-bold text-base underline">
              <Link href="mailto:sales@dukiapreciousmetals.co">
                sales@dukiapreciousmetals.co
              </Link>
            </span>{" "}
            to order.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

const BarsPage: React.FC<BarsPageProps> = ({ searchTerm }) => {
  const [flippedState, setFlippedState] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleMouseEnter = (key: number) => {
    setFlippedState((prev) => ({ ...prev, [key]: false }));
  };

  const handleMouseLeave = (key: number) => {
    setFlippedState((prev) => ({ ...prev, [key]: true }));
  };

  const handleClick = (key: number) => {
    setFlippedState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const BarsArray: Bar[] = [
    {
      key: 1,
      title: "1g - Philoro",
      imageFront:
        "https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718367921/Gold_Bar_ly3nbk.png",
      imageBack:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900284/dukia-products/cert-dukia-Gold-Bar1-1g_philoro.jpg",
    },
    {
      key: 2,
      title: "10g - Philoro",
      imageFront:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900287/dukia-products/dukia-Gold-Bar-10g_philoro.jpg",
      imageBack:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900285/dukia-products/cert-dukia-Gold-Bar-10g_philoro.jpg",
    },
    {
      key: 3,
      title: "1oz - Philoro",
      imageFront:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900286/dukia-products/dukia-Gold-Bar-1oz_philoro.jpg",
      imageBack:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900285/dukia-products/cert-dukia-Gold-Bar-1oz_philoro.jpg",
    },
    {
      key: 4,
      title: "50g - Philoro",
      imageFront:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900287/dukia-products/dukia-Gold-Bar-50g_philoro.jpg",
      imageBack:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900286/dukia-products/cert-dukia-Gold-Bar-50g_philoro.jpg",
    },
    {
      key: 5,
      title: "100g - Philoro",
      imageFront:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900287/dukia-products/dukia-Gold-Bar-100g_philoro.jpg",
      imageBack:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900286/dukia-products/cert-dukia-Gold-Bar-100g_philoro.jpg",
    },
    {
      key: 6,
      title: "1000kg (1kg) - Philoro",
      imageFront:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900287/dukia-products/dukia-Gold-Bar-100g_1kg_philoro.jpg",
      imageBack:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900286/dukia-products/cert-dukia-Gold-Bar-100g_philoro.jpg",
    },
  ];

  // Ensure searchTerm is always a string
  const normalizedSearchTerm = (searchTerm || "").toLowerCase();

  const filteredBars = BarsArray.filter((bar) =>
    bar.title.toLowerCase().includes(normalizedSearchTerm)
  );

  return (
    <div className="flex flex-col items-center gap-2.5 md:gap-5">
      <p className="xl:hidden font-bold text-[2.5rem]">Gold Bars</p>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBars.map((bar) => (
          <BarCard
            key={bar.key}
            bar={bar}
            isFront={flippedState[bar.key] !== false}
            handleMouseEnter={() => handleMouseEnter(bar.key)}
            handleMouseLeave={() => handleMouseLeave(bar.key)}
            handleClick={() => handleClick(bar.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default BarsPage;
