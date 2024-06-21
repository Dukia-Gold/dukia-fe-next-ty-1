import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed pt-48 xl:pt-36 px-3 md:px-12 xl:px-28 py-4 flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      <div className="flex flex-col gap-2 items-center z-20">
        <Image
          src="https://res.cloudinary.com/dcu3hr3eo/image/upload/c_scale,w_134/v1686236202/Dukia_Gold_Logo_TRA_cwhx0e.png"
          alt="Dukia Gold's Logo"
          width={120}
          height={102.99}
        />{" "}

        <div className="flex flex-col gap-6 items-center text-white">
            <div className="flex flex-col gap-2 text-center md:max-w-[75%]">
                <p className="font-extrabold text-5xl">About <br className="md:hidden"/> Dukia Gold</p>

                <p>Lorem ipsum dolor sit amet consectetur. Fermentum velit dignissim pretium aenean sagittis parturient faucibus. Donec scelerisque cursus cras rhoncus viverra nibh orci.</p>
            </div>

            <div>
                <button className="bg-dukiaGold py-3 px-8 rounded-lg text-dukiaBlue font-semibold text-sm">Buy Gold</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
