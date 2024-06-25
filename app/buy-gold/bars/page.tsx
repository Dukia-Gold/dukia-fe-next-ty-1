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

const BarsPage = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718367921/Gold_Bar_ly3nbk.png"
  );

  const BarsArrays = [
    {
      key: 1,
      title: "1g - Philoro",
      imageFront:
        "https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718367921/Gold_Bar_ly3nbk.png",
      imageBack: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900284/dukia-products/cert-dukia-Gold-Bar1-1g_philoro.jpg",
    },
    {
      key: 2,
      title: "10g - Philoro",
      imageFront: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900287/dukia-products/dukia-Gold-Bar-10g_philoro.jpg",
      imageBack: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900285/dukia-products/cert-dukia-Gold-Bar-10g_philoro.jpg",
    },
    {
      key: 3,
      title: "1oz - Philoro",
      imageFront: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900286/dukia-products/dukia-Gold-Bar-1oz_philoro.jpg",
      imageBack: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900285/dukia-products/cert-dukia-Gold-Bar-1oz_philoro.jpg",
    },
    {
      key: 4,
      title: "50g - Philoro",
      imageFront: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900287/dukia-products/dukia-Gold-Bar-50g_philoro.jpg",
      imageBack: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900286/dukia-products/cert-dukia-Gold-Bar-50g_philoro.jpg",
    },
    {
      key: 5,
      title: "100g - Philoro",
      imageFront: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900287/dukia-products/dukia-Gold-Bar-100g_philoro.jpg",
      imageBack: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900286/dukia-products/cert-dukia-Gold-Bar-100g_philoro.jpg",
    },
    {
      key: 6,
      title: "1000kg (1kg) - Philoro",
      imageFront: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900287/dukia-products/dukia-Gold-Bar-100g_1kg_philoro.jpg",
      imageBack: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680900286/dukia-products/cert-dukia-Gold-Bar-100g_philoro.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-2.5 md:gap-5">
      <p className="xl:hidden font-bold text-[2.5rem]">Gold Bars</p>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BarsArrays.map((item) => (
          <Card
            key={item.key}
            className="shadow-lg pt-5 border-none rounded-2xl flex flex-col items-center w-[100%] gap-5"
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={
                  item.imageFront ??
                  "https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718367921/Gold_Bar_ly3nbk.png"
                }
                alt={item.title}
                width={350}
                height={350}
                onClick={() =>
                  setImageSrc(
                    item.imageBack ??
                      "https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718367921/Gold_Bar_ly3nbk.png"
                  )
                }
                onMouseEnter={() =>
                  setImageSrc(
                    item.imageBack ??
                      "https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718367921/Gold_Bar_ly3nbk.png"
                  )
                }
                onMouseLeave={() =>
                  setImageSrc(
                    item.imageFront ??
                      "https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718367921/Gold_Bar_ly3nbk.png"
                  )
                }
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
  );
};

export default BarsPage;
