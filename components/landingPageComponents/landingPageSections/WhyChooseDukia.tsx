import Image from "next/image";
import React, { FC } from "react";

const WhyChooseDukia: FC = () => {
  return (
    <section className="pt-12 pb-28 px-4 lg:px-20 dark:bg-dukiaBlue dark:text-white">
      <div className="md:container flex flex-col space-y-14 items-center">
        <p className="font-bold text-[1.75rem]">Why Choose Dukia</p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 grid-rows-subgrid">
          <div className="bg-dukiaGrey dark:bg-white/[5%] rounded-2xl border border-dukiaBlue/[5%] dark:border-white/[5%] p-6 flex flex-col gap-3 items-center">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/c_scale,w_134/v1718960746/sheild-dynamic-premium_azgnhu.png"
                alt="Shield Dynamic Premium"
                width={64}
                height={64}
              />
              <p className="font-semibold text-center">A Trustworthy Brand</p>
            </div>

            <p className="text-sm text-center">
              Buy gold from a trustable products provider that is fully licensed
              as a bullion merchant in Nigeria and operates in line with the
              best standards and practices in adherence to all local and
              international regulations.
            </p>
          </div>

          <div className="bg-dukiaGrey dark:bg-white/[5%] rounded-2xl border border-dukiaBlue/[5%] dark:border-white/[5%] p-6 flex flex-col gap-3 items-center">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/c_scale,w_134/v1718960746/bookmark-fav-dynamic-premium.png"
                alt="Bookmark Fav Dynamic Premium"
                width={64}
                height={64}
              />
              <p className="font-semibold text-center">Fairness & Integrity</p>
            </div>

            <p className="text-sm text-center">
              Our pricing, which is based on the LBMA spot price, is fair,
              transparent, and competitive with no hidden fees. Our products are
              responsibly sourced from LBMA accredited refiners ensuring that we
              sell products of highest quality to you. We offer buyback on all
              our products at the best rate market rates.
            </p>
          </div>

          <div className="bg-dukiaGrey dark:bg-white/[5%] rounded-2xl border border-dukiaBlue/[5%] dark:border-white/[5%] p-6 flex flex-col gap-3 items-center">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/c_scale,w_134/v1718960746/chart-dynamic-premium_bvifrx.png"
                alt="Shield Dynamic Premium"
                width={64}
                height={64}
              />
              <p className="font-semibold text-center">Ease of Trading</p>
            </div>

            <p className="text-sm text-center">
              Using our state-of-the-art, secure, and intuitive platform, you
              can buy, sell, invest and do much more wih gold with just a tap of
              a button.
            </p>
          </div>

          <div className="xl:col-start-1 xl:col-end-3 bg-dukiaGrey dark:bg-white/[5%] rounded-2xl border border-dukiaBlue/[5%] dark:border-white/[5%] p-6 flex flex-col gap-3 items-center">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/c_scale,w_134/v1718960746/locker-dynamic-premium_irfudo.png"
                alt="Shield Dynamic Premium"
                width={64}
                height={64}
              />
              <p className="font-semibold text-center">
                Assured Safekeeping of your assets
              </p>
            </div>

            <p className="text-sm text-center">
              For your peace of mind, your gold holdings are safe, secure, and
              insured with our designated third-party LBMA Vaulting Service
              Provider, Brink&apos;s. Products in transit are discreetly packed
              in a tamper-proof packaging and safely delivered to you.
            </p>
          </div>

          <div className="md:col-start-1 xl:col-start-3 md:col-end-3 xl:col-end-4 bg-dukiaGrey dark:bg-white/[5%] rounded-2xl border border-dukiaBlue/[5%] dark:border-white/[5%] p-6 flex flex-col gap-3 items-center">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/c_scale,w_134/v1718960746/calculator-dynamic-premium_aufxdv.png"
                alt="Shield Dynamic Premium"
                width={64}
                height={64}
              />
              <p className="font-semibold text-center">
                Risk Control and Management
              </p>
            </div>

            <p className="text-sm text-center">
              At Dukia Gold, we take seriously the safeguarding of our customers
              interests and we have established frameworks and controls for risk
              management on an ongoing basis taking into account operational
              risks, unlikely event of winding-down, legal and compliance risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDukia;
