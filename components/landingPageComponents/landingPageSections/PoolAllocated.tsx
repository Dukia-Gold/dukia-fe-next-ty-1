import Link from "next/link";
import PoolAllocatedCalculator from "../PoolAllocatedCalculator";

const PoolAllocated = () => {
  return (

    <section className="py-[7.5rem] flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-32 text-dukiaBlue mx-auto justify-between xl:max-w-[1061px] px-4 sm:px-8 lg:px-0">
  <div className="p-8 sm:p-12 bg-yellow-50 w-full max-w-[1100px] lg:w-[1100px] h-auto lg:h-[620px] rounded-xl">
    <div className="p-6 sm:p-8 bg-dukiaBlue w-full max-w-[400px] lg:w-[400px] h-auto lg:h-[510px] rounded-xl">
      <div className=" -top-2 -right-2">
        <PoolAllocatedCalculator />
      </div>
    </div>
  </div>

  <div className="space-y-7 px-4 lg:px-0">
    <div className="space-y-6">
      <h3 className="font-extrabold font-manrope text-[2rem] sm:text-[2.5rem] leading-[40px] sm:leading-[60px] tracking-[-0.03em] text-center lg:text-left">
        Pool Allocated
      </h3>
      <p className="font-manrope text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] tracking-[-0.03em] text-center lg:text-left">
        Pool Allocated: Invest in our gold bullion reserves, managed, stored,
        and insured by Brink&apos;s, our LBMA-approved vaulting partner. <br /> <br />
        Your gold holdings are safe, secure, and protected.
      </p>
    </div>

    <div className="text-center lg:text-left">
      <button className="py-3 px-4 font-bold bg-dukiaBlue hover:bg-dukiaGold text-white hover:text-dukiaBlue rounded-lg">
        <Link href="/buy-gold">Buy Pool Allocated</Link>
      </button>
    </div>
  </div>
</section>

  );
};

export default PoolAllocated;
