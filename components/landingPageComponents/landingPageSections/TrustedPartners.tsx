import Image from "next/image";

const TrustedPartners = () => {
  return (
    <section className="py-5 bg-white/[60%]">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center space-y-4">
        <h3 className="text-dukiaBlue text-xl font-extrabold text-center">
          TRUSTED PARTNERS
        </h3>

        <div className="grid grid-cols-2 gap-y-5 justify-center gap-x-5 md:flex md:w-[90%] lg:justify-between items-center">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1721826166/Screenshot_2024-07-24_104158_1_khikwb.png"
            alt="Baird & Co."
            width={84.92}
            height={30}
            className="w-[92px] h-[32.5px] md:w-auto md:h-auto"
          />

          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1721826165/2020_Logo-philoro_GlobalTrading_QF_1_fzwmmx.png"
            alt="Philoro Global Trading"
            width={105.63}
            height={30}
          />

          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1721826164/brinks-logo-blue_1_bgbw94.png"
            alt="Brinks"
            width={143}
            height={25}
          />

          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1721826163/665deb7bbb2807e7c6a7f79d_Paythru_logo_Color_1_hbuuub.png"
            alt="Paythru"
            width={58.72}
            height={30}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
