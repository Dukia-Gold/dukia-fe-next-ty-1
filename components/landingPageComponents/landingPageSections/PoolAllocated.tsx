import Link from "next/link";
import PoolAllocatedCalculator from "../PoolAllocatedCalculator";

const PoolAllocated = () => {
  return (
    <section className="py-[7.5rem] flex items-center space-x-32 text-dukiaBlue mx-auto justify-between xl:max-w-[1061px]">
      <PoolAllocatedCalculator />

      <div className="space-y-7">
        <div className="space-y-6">
          <h3 className="font-extrabold text-[2.5rem]">Pool allocated</h3>

          <p>
            Pool Allocated: Invest in our gold bullion reserves, managed,
            stored, and insured by Brink&apos;s, our LBMA-approved vaulting
            partner. <br /> <br />
            Your gold holdings are safe, secure, and protected.
          </p>
        </div>

        <button className="py-3 px-4 font-semibold bg-dukiaBlue hover:bg-dukiaGold text-white hover:text-dukiaBlue rounded-lg">
          <Link href="/buy-gold">Buy Gold</Link>
        </button>
      </div>
    </section>
  );
};

export default PoolAllocated;
