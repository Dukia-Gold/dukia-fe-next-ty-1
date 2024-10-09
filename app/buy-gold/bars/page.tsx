"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/currencyformatter";
import { fetchProductSearch } from "@/lib/fetchProductSearch";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "path";
import { useEffect, useState } from "react";

interface Bar {
  key: number;
  title: string;
  imageFront: string;
  imageBack: string;
}

interface BarCardProps {
  bar: any;
  isFront: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleClick: () => void;
}

const BarCard: React.FC<BarCardProps> = ({
  bar,
  isFront,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}) => {
  return (
    <div className="border border-[#E8E9ED] max-w-[314px] space-y-4 bg-white rounded-xl">
      <div className="flex justify-center py-3">
        <Image
          src={isFront ? bar.thumbnail_url : bar.thumbnail_url2}
          alt={bar.title}
          width={200}
          height={344}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="cursor-pointer"
        />
      </div>

      <div className="px-3 pb-3 font-semibold space-y-5">
        <div className="space-y-2 text-base/5">
          <p>{bar.name}</p>

          <p className="flex gap-1 items-center">
            {formatCurrency(bar.ask_price)}{" "}
            <span className="text-xs text-red-600 flex items-center">
              <ArrowDown size={12} />0.99%
            </span>
          </p>
        </div>

        <button className="bg-dukiaBlue py-3 text-white rounded-lg w-full">
          Add to Cart
        </button>
      </div>
    </div>
    // <Card
    //   key={bar.key}
    //   className="dark:bg-white/[5%] shadow-lg pt-5 border-none rounded-2xl flex flex-col items-center w-[100%] gap-5"
    // >
    //   <CardHeader>
    //     <CardTitle className="text-center">{bar.name}</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <Image
    //       src={isFront ? bar.thumbnail_url : bar.thumbnail_url2}
    //       alt={bar.title}
    //       width={350}
    //       height={350}
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //       onClick={handleClick}
    //       className="cursor-pointer"
    //     />
    //   </CardContent>
    //   <CardFooter className="relative w-full rounded-b-2xl">
    //     <div className="absolute inset-0 bg-black/[6%] dark:bg-dukiaDark/[30%] blur w-full h-full"></div>
    //     <div className="pt-5 w-full h-full inset-0 text-dukiaGold text-center">
    //       <p className="text-sm">
    //         Please call{" "}
    //         <span className="font-bold text-base underline">
    //           +234 703 323 8121
    //         </span>{" "}
    //         or send an email to{" "}
    //         <span className="font-bold text-base underline">
    //           <Link href="mailto:sales@dukiapreciousmetals.co">
    //             sales@dukiapreciousmetals.co
    //           </Link>
    //         </span>{" "}
    //         to order.
    //       </p>
    //     </div>
    //   </CardFooter>
    // </Card>
  );
};

const BarsPage = () => {
  const [bars, setBars] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProductSearch("bar");
      setBars(products);
      console.log(products);
      if (!products) return notFound();
    };

    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

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
  // const normalizedSearchTerm = (searchTerm || "").toLowerCase();

  // const filteredBars = BarsArray.filter((bar) =>
  //   bar.title.toLowerCase().includes(normalizedSearchTerm)
  // );

  return (
    <div className="flex flex-col items-center gap-2.5 md:gap-5">
      <p className="xl:hidden font-bold text-[2.5rem]">Gold Bars</p>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bars?.map((bar, index: number) => (
          <BarCard
            key={index}
            bar={bar}
            isFront={flippedState[index] !== false}
            handleMouseEnter={() => handleMouseEnter(index)}
            handleMouseLeave={() => handleMouseLeave(index)}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BarsPage;
