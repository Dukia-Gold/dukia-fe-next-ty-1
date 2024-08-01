import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function loading() {
  return (
    <div className="bg-white px-4 py-3 rounded-xl">
      <div className="bg-[#F6F7F9] pt-10 px-4 rounded-xl">
        <Link href={"/dashboard/buy-gold"}>
          <p className="inline-flex items-center text-[#D4A418] font-manrope text-base font-semibold leading-[1.2] tracking-tight text-left">
            <ArrowLeft className="mr-2" /> Go Back
          </p>
        </Link>

        <ul className="gap-14 grid md:grid-cols-2 lg:grid-cols-3 pt-10 pb-[2.625rem]">
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
          <Skeleton className="w-auto h-[350px] bg-dukiaBlue/[10%]" />
        </ul>
      </div>
    </div>
  );
}

export default loading;
