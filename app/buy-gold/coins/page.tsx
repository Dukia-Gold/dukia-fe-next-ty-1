"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const CoinsPage = () => {
  const [isFront, setIsFront] = useState(true);

  const handleMouseEnter = () => setIsFront(false);
  const handleMouseLeave = () => setIsFront(true);
  const handleClick = () => setIsFront(!isFront);

  const CoinsArray = [
    {
      key: 1,
      title: "1 oz Canadian Maple Leaf Gold Coin",
      imageFront:
        "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900287/dukia-products/dukia-gold-coin-1oz-Canadian-Maple-Leaf.jpg",
      imageBack: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900287/dukia-products/dukia-gold-coin-1oz-Canadian-Maple-Leaf-2.jpg",
    },
    {
      key: 2,
      title: "1 oz South African Krugerrand Gold Coin",
      imageFront: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900283/dukia-products/dukia-gold-coin-1oz-South-African-Krugerrand-2.jpg",
      imageBack: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900283/dukia-products/dukia-gold-coin-1oz-South-African-Krugerrand.jpg",
    },
    {
      key: 3,
      title: "1 oz Austrian Philharmonic Gold Coin",
      imageFront: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900288/dukia-products/dukia-gold-coin-1oz-Austrian-Philharmonic-2.jpg",
      imageBack: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900288/dukia-products/dukia-gold-coin-1oz-Austrian-Philharmonic.jpg",
    },
    {
      key: 4,
      title: "1 oz American Eagle Gold Coin",
      imageFront: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900288/dukia-products/dukia-gold-coin-1oz-American-Eagle-2.jpg",
      imageBack: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1686238685/dukia-products/Dukia-Gold-Coin-American-Eagle.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-2.5 md:gap-5">
      <p className="xl:hidden font-bold text-[2.5rem]">Gold Coins</p>

      <div className="w-full grid md:px-20 lg:px-0 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
        {CoinsArray.map((coin) => (
          <Card
            key={coin.key}
            className="shadow-lg pt-5 border-none rounded-2xl flex flex-col items-center w-[100%] gap-5"
          >
            <CardHeader>
              <CardTitle className="text-center">{coin.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={isFront ? coin.imageFront : coin.imageBack}
                alt={coin.title}
                width={350}
                height={350}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
              />
            </CardContent>
            <CardFooter className="relative w-full rounded-b-2xl">
              <div className="absolute inset-0 bg-black/[6%] blur w-full h-full"></div>
              <div className=" pt-5 w-full h-full inset-0 text-dukiaGold text-center">
                <p className="text-sm">Please call <span className="font-bold text-base underline">+234 703 323 8121</span> or send an email to <span className="font-bold text-base underline">sales@dukiapreciousmetals.co</span> to order.</p> 
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CoinsPage
