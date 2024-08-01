import ProductOption from "@/components/dashboardComponents/buyGoldComponents/ProductOption";
import { fetchProductSearch } from "@/lib/fetchProductSearch";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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

  return (
    <div className="bg-white px-4 py-3 rounded-xl">
      <div className="bg-[#F6F7F9] pt-10 px-4 rounded-xl">
        <Link href={"/dashboard/buy-gold"}>
          <p className="inline-flex items-center text-[#D4A418] font-manrope text-base font-semibold leading-[1.2] tracking-tight text-left">
            <ArrowLeft className="mr-2" /> Go Back
          </p>
        </Link>

        <ul className="gap-14 grid md:grid-cols-2 lg:grid-cols-3 pt-10 pb-[2.625rem]">
          {products?.map((product: any) => (
            <ProductOption
              key={product.id}
              title={product.name}
              price={(product.ask * 1661.07).toString()}
              priceChange="0.99%"
              image={product.thumbnail_url}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchPage;
