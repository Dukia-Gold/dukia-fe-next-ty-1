import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div>
      <h3 className="text-dukiaBlue text-[40px] font-extrabold leading-[60px] tracking-[-0.03em] text-center">
        Why Choose Us
      </h3>

      <div className="flex justify-center pt-6">
        <div className="bg-[#FBF7EB] p-4 md:p-8 lg:p-12 mx-auto  w-full max-w-[1064px] rounded-2xl">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="bg-white rounded-lg p-4 md:w-1/3 mb-4 md:mb-0">
              <div className="inline-block p-3 bg-dukiaGrey rounded-full">
                <Image
                  src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729460311/iconamoon_shield-yes-fill_udreok.png"
                  alt="trusted brand"
                  width={24}
                  height={24}
                />
              </div>
              <h5 className="text-dukiaBlue text-[20px] font-extrabold leading-[30px] tracking-[-0.03em] text-left">
                Trusted Brand
              </h5>
              <p className="text-dukiaBlue text-[14px] font-normal leading-[21px] tracking-[-0.03em] text-left">
                Buy gold from a trust-worthy products provider that is fully
                licensed as a bullion merchant in Nigeria and operates in line
                with the best standards and practices in adherence to all local
                and international regulations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 md:w-1/3 mb-4 md:mb-0">
              <div className="inline-block p-3 bg-gray-200 rounded-full">
                <Image
                  src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729460310/tabler_lock-filled_s3qesz.png"
                  alt="trusted brand"
                  width={24}
                  height={24}
                />
              </div>
              <h5 className="text-dukiaBlue text-[20px] font-extrabold leading-[30px] tracking-[-0.03em] text-left">
                Asset Safekeeping
              </h5>
              <p className="text-dukiaBlue text-[14px] font-normal leading-[21px] tracking-[-0.03em] text-left">
                For your peace of mind, your gold holdings are safe, secure, and
                insured with our designated third-party LBMA Vaulting Service
                Provider, Brink&apos;s. Products in transit are discreetly packed in
                tamper-proof packaging and safely delivered to you.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 md:w-1/3 mb-4 md:mb-0">
              <div className="inline-block p-3 bg-dukiaGrey rounded-full">
                <Image
                  src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729460308/heroicons_chart-pie-20-solid_uc7e9e.png"
                  alt="trusted brand"
                  width={24}
                  height={24}
                />
              </div>
              <h5 className="text-dukiaBlue text-[20px] font-extrabold leading-[30px] tracking-[-0.03em] text-left">
                Ease Of Trading
              </h5>
              <p className="text-dukiaBlue text-[14px] font-normal leading-[21px] tracking-[-0.03em] text-left">
                Using our state-of-the-art, secure and intuitive platform, you
                can buy, sell, invest and do much more with gold by just tapping
                a button.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between mt-4 gap-4">
            <div className="bg-white rounded-lg p-4 w-full md:w-1/2 mb-4 md:mb-0">
              <div className="inline-block p-3 bg-dukiaGrey rounded-full">
                <Image
                  src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729460305/emojione-monotone_balance-scale_ikzpur.png"
                  alt="trusted brand"
                  width={24}
                  height={24}
                />
              </div>
              <h5 className="text-dukiaBlue text-[20px] font-extrabold leading-[30px] tracking-[-0.03em] text-left">
                Fairness & Integrity
              </h5>
              <p className="text-dukiaBlue text-[14px] font-normal leading-[21px] tracking-[-0.03em] text-left">
                We prioritize transparency and fairness in all our transactions,
                ensuring you receive the best value for your investments.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 w-full md:w-1/2 mb-4 md:mb-0">
              <div className="inline-block p-3 bg-dukiaGrey rounded-full">
                <Image
                  src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729460304/tabler_settings-filled_dzbkyh.png"
                  alt="trusted brand"
                  width={24}
                  height={24}
                />
              </div>
              <h5 className="text-dukiaBlue text-[20px] font-extrabold leading-[30px] tracking-[-0.03em] text-left">
                Risk Control & Management
              </h5>
              <p className="text-dukiaBlue text-[14px] font-normal leading-[21px] tracking-[-0.03em] text-left">
                At Dukia Gold, we take seriously the safeguarding of our
                customers&apos; interests and we have established frameworks and
                controls for risk management on an ongoing basis taking into
                account operational risks, unlikely event of winding-down, legal
                and compliance risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
