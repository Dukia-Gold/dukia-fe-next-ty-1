import ProductOption from "@/components/dashboardComponents/buyGoldComponents/ProductOption";
import { fetchProductSearch } from "@/lib/fetchProductSearch";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  searchParams: {
    q: string;
  };
};

const normalizeQuery = (query: string) => {
  return query.toLowerCase().endsWith("s")
    ? query.slice(0, -1).toLowerCase()
    : query.toLowerCase();
};

async function SearchPage({ searchParams: { q } }: Props) {
  const normalizedQuery = normalizeQuery(q);
  const products = await fetchProductSearch(normalizedQuery);
  if (!products) return notFound();

  return (
    <div className="bg-white px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
      <div className="bg-[#F6F7F9] pt-10 px-4 rounded-xl transition-all duration-300">
        <Link href={"/dashboard/buy-gold"}>
          <p className="inline-flex items-center text-[#D4A418] font-manrope text-base font-semibold leading-[1.2] tracking-tight text-left transition-colors duration-300 hover:text-[#B39416]">
            <ArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />{" "}
            Go Back
          </p>
        </Link>

        <ul className="gap-14 grid md:grid-cols-2 lg:grid-cols-3 pt-10 pb-[2.625rem]">
          {products?.map((product: any) => (
            <ProductOption
              key={product.id}
              title={product.name}
              price={(product.ask * 1661.07).toString()}
              priceChange="0.99%"
              image1={product.thumbnail_url}
              image2={product.thumbnail_url2}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchPage;
