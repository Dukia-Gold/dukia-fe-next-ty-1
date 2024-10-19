import { formatCurrency } from "@/lib/currencyformatter";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  price: number;
  priceChange: string;
  className?: string;
  image1?: string;
  image2?: string;
};

const ProductOption = ({
  id,
  title,
  price,
  priceChange,
  className,
  image1,
  image2,
}: Props) => {
  return (
    <div className="bg-white rounded-xl px-3 py-3  flex flex-col">
      <div className="bg-[#FBF7EB] py-3 px-[2.8125rem] flex items-center justify-center group cursor-pointer relative">
        {image1 && image2 && (
          <>
            <Image
              src={image1}
              alt={title}
              priority
              width={200}
              height={343.48}
              className="block group-hover:opacity-0 transition-opacity duration-1000"
            />
            <Image
              src={image2}
              alt={title}
              priority
              width={200}
              height={343.48}
              className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            />
          </>
        )}
      </div>

      <div className="">
        <p className="text-base font-semibold leading-5 text-left text-dukiaBlue pt-4 pl-3">
          {" "}
          {title}
        </p>
        <p className="inline-flex  text-base font-semibold leading-5 text-left text-dukiaBlue py-3 pl-3">
          {formatCurrency(price)}
          <span className="text-[#FF5757] inline-flex text-xs font-semibold leading-4 text-left pt-1">
            {" "}
            <ArrowDown className="ml-3" size={15} /> {priceChange}
          </span>
        </p>
      </div>

      <Link
        href={{
          pathname: "/dashboard/product",
          query: { id: id },
        }}
      >
        <button className="w-full bg-dukiaBlue text-white py-3 px-4 rounded-xl text-base font-semibold leading-5">
          See details
        </button>
      </Link>
    </div>
  );
};

export default ProductOption;
