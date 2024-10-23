import React from "react";
import { useState } from "react";
import Image from "next/image";

const items = [
  {
    id: "buy",
    title: "Buy",
    imageSrc:
      "https://res.cloudinary.com/dvcw253zw/image/upload/v1729433220/BU_ci8whl.png",
    description:
      "Buy our wide selection of real physical gold with 99.99% purity stored for you with Brinks or for insured delivery to your doorstep on orders upto 1 Gram.",
    icon: "https://res.cloudinary.com/dvcw253zw/image/upload/v1729434351/fa-solid_box_p30sdj.png",
  },
  {
    id: "own",
    title: "Own",
    imageSrc:
      "https://res.cloudinary.com/dvcw253zw/image/upload/v1729433225/OW_ximgee.png",
    description:
      "Take control and enjoy flexibilty with your gold investments. Buy gold that fits your budget, store it securely in our protected vault, or opt for home delivery. Set up an investment plan to start growing your wealth today.",
    icon: "https://res.cloudinary.com/dvcw253zw/image/upload/v1729434350/fa6-solid_hand-holding-dollar_zobiro.png",
  },
  {
    id: "track",
    title: "Track",
    imageSrc:
      "https://res.cloudinary.com/dvcw253zw/image/upload/v1729433221/TR_urkkep.png",
    description: "See how the assets in your portfolio are doing in real time.",
    icon: "https://res.cloudinary.com/dvcw253zw/image/upload/v1729434350/ant-design_pie-chart-filled_uizfvx.png",
  },
  {
    id: "sell",
    title: "Sell",
    imageSrc:
      "https://res.cloudinary.com/dvcw253zw/image/upload/v1729429723/sell_mcs1yy.png",
    description:
      "Enjoy instant liquidity of your gold holdings and receive immediate payment",
    icon: "https://res.cloudinary.com/dvcw253zw/image/upload/v1729434349/fa-solid_boxred_dz8ftj.png",
  },
];

const WeOffer = () => {
  const [activeItem, setActiveItem] = useState("buy");

  const activeItemData = items.find((item) => item.id === activeItem);
  return (
    <div>
      <h3 className="font-manrope text-[40px] font-extrabold text-dukiaBlue leading-[60px] tracking-[-0.03em] text-center">
        What We Offer
      </h3>
        <div className="flex flex-col md:flex-row justify-between gap-8 px-2 md:px-4 lg:px-8 xl:px-5 mx-auto py-5 w-full max-w-[1064px]">
          <div className="w-full md:w-1/2 flex items-center justify-center rounded-lg">
            <Image
              src={activeItemData?.imageSrc || "/default-image.png"}
              alt={activeItemData?.title || "Default Title"}
              width={664}
              height={558}
              className="rounded-lg w-full h-auto transition-all duration-1000 ease-in-out"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 pt-10">
            {items.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col cursor-pointer p-4 relative transition-all duration-1000 ease-in-out ${
                  activeItem === item.id
                    ? "bg-yellow-50 text-dukiaBlue"
                    : "bg-white text-gray-500"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                {/* Conditionally render the left line when active */}
                {activeItem === item.id && (
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-dukiaGold transition-all duration-1000 ease-in-out"></div>
                )}

                {/* Title and Icon in a flex container */}
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-lg md:text-xl lg:text-2xl xl:text-[32px] font-extrabold leading-tight tracking-[-0.03em] transition-all duration-1000 ease-in-out ${
                      activeItem === item.id
                        ? "text-dukiaBlue"
                        : "text-[#B9BBC8]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Icon displayed only when the item is active */}
                  {activeItem === item.id && (
                    <div className="flex-shrink-0">
                      <Image
                        src={activeItemData?.icon || "/default-image.png"}
                        alt={activeItemData?.title || "Default Title"}
                        width={28}
                        height={28}
                        className="ml-2 transition-all duration-1000 ease-in-out"
                      />
                    </div>
                  )}
                </div>

                {/* Description below the title and icon */}
                {activeItem === item.id && (
                  <p className="mt-4 text-sm md:text-base lg:text-lg font-normal leading-snug transition-all duration-1000 ease-in-out">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      <div className="mx-auto w-full max-w-[1064px] rounded-lg mt-20">
        <div className="bg-[linear-gradient(180deg,#F7FEFF_0%,#FFFAEA_89.78%)] p-4 pb-0 sm:p-6 sm:pb-0 md:p-8 md:pb-0 lg:p-10 lg:pb-0 xl:p-12 xl:pb-0 h-full">
          <h4 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold leading-[24px] sm:leading-[28.8px] md:leading-[32px] lg:leading-[38.4px] tracking-[-0.03em] pt-10 text-center text-dukiaBlue">
            Experience Seamless Asset Exchange
          </h4>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-[16px] sm:leading-[20px] md:leading-[24px] tracking-[-0.03em] text-center text-dukiaBlue mt-2 md:mt-4">
            Convert Gold To Other Asset Types In Real-Time. Save Them All On
            Dukia Gold
          </p>
          <div className="flex justify-center mt-2">
            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729450818/Group_113_cpvniz.png"
              alt="Seamless asset exchange"
              width={887}
              height={531}
              className="rounded-lg w-full max-w-[887px] h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-12 md:flex-row justify-between gap-6 p-4 md:p-8 lg:py-10 lg:px-0 mx-auto  w-full max-w-[1064px]">
        <div className="flex-1 pt-10">
          <h3 className="text-[32px] md:text-[40px] font-extrabold leading-[40px] md:leading-[60px] tracking-[-0.03em] text-left text-dukiaBlue ">
            Reach Your <br />{" "}
            <span className="text-dukiaGold">Financial Goals. </span> <br />
            Turn On <span className="text-dukiaGold">AutoSave</span>
          </h3>
          <p className="text-[14px] md:text-[16px] mt-5 font-normal leading-[20px] md:leading-[24px] tracking-[-0.03em] text-left">
            Leverage our smart saving features and reach your goals <br />{" "}
            faster
          </p>
          <div className="flex gap-5 mt-7">
            <div className="flex border border-blue-50 py-2 px-3 rounded-full">
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729391457/twemoji_shield_mmwnvo.png"
                alt="secure"
                width={30}
                height={30}
              />
              <p className="text-[16px] font-normal leading-[24px] tracking-[-0.03em] pl-1 text-dukiaBlue">
                Secure
              </p>
            </div>
            <div className="flex border border-blue-50 py-2 px-3 rounded-full">
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729455085/fa-solid_toggle-on_r16dn7.png"
                alt="Turn off anytime"
                width={30}
                height={30}
              />
              <p className="text-[16px] font-normal leading-[24px] tracking-[-0.03em] pl-1 text-dukiaBlue">
                Turn off anytime
              </p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729452906/save_prj0n4.png"
            alt="AutoSave"
            width={524}
            height={497}
            className="w-full max-w-[524px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
