import { formatCurrency } from "@/lib/currencyformatter";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  price: string;
  priceChange: string;
  className?: string;
  image?: string;
};

const ProductOption = ({ title, price, priceChange, className, image }: Props) => {
  return (
    <Link
      href={{
        pathname: "/dashboard/buy-gold/product",
        query: { q: title },
      }}
    >
      <div className="bg-white rounded-xl px-3 py-3  flex flex-col">
        <div className="bg-[#FBF7EB] py-3 px-[2.8125rem] flex items-center justify-center">
          {image && (
            <Image src={image} alt={title} width={200} height={343.48} />
          )}
        </div>
        <div className="">
          <p className="font-manrope text-base font-semibold leading-5 text-left text-dukiaBlue pt-4 pl-3">
            {" "}
            {title}
          </p>
          <p className="font-manrope inline-flex  text-base font-semibold leading-5 text-left text-dukiaBlue py-3 pl-3">
            {formatCurrency(Number(price))}
            <span className="text-[#FF5757] inline-flex font-manrope text-xs font-semibold leading-4 text-left pt-1">
              {" "}
              <ArrowDown className="ml-3" size={15} /> {priceChange}
            </span>
          </p>
        </div>
        <div>
          <button className="w-full bg-dukiaBlue text-white py-3 px-4 rounded-xl font-manrope text-base font-semibold leading-5">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductOption;
