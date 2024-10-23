import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import useModalsStore from "@/store/modalsStore";
import { useRouter } from "next/navigation";

const items = [
  {
    price: "₦10,000",
    weight: "0.05g",
    change: "0.11%",
    changeType: "down",
    color: "text-red-500",
  },
  {
    price: "₦15,000",
    weight: "0.08g",
    change: "0.11%",
    changeType: "up",
    color: "text-dukiaBlue",
  },
  {
    price: "₦20,000",
    weight: "0.11g",
    change: "0.11%",
    changeType: "up",
    color: "text-green-500",
  },
];

const Shop = () => {
  const router = useRouter();
  const token = Cookies.get("auth-token");
  const updateModals = useModalsStore((state: any) => state.updateModals);
  return (
    <div>
      <h3 className="text-dukiaBlue font-manrope text-[40px] font-extrabold leading-[60px] tracking-[-0.03em] text-center">
        Shop With Ease
      </h3>
      <div className="flex flex-col lg:flex-row px-6 py-5 gap-7  lg:px-[27rem] lg:py-10 lg:gap-7 mx-auto justify-between">
        <div className="bg-[#FBF7EB] flex flex-col p-20 rounded-2xl h-[620px]">
          <div className="flex flex-row">
            <div>
              <h3 className="font-manrope text-[32px] font-extrabold leading-[38.4px] tracking-[-0.03em] text-left text-dukiaBlue">
                Philoro Bars
              </h3>
              <p className="font-manrope text-[15px] font-normal leading-[24px] tracking-[-0.03em] text-left pt-3">
                Get Access To Discrete LBMA Approved Bars
              </p>
            </div>
            <div>
              <button className="bg-dukiaBlue text-white py-2 px-4 mt-10 flex items-center gap-2 rounded-md hover:bg-dukiaGold group">
                <Link href="/buy-gold/bars">
                  <span>Explore</span>
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 group-hover:hidden"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 hidden group-hover:block"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-grow flex items-end pt-24 lg:pt-16">
            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729375671/dukia-Gold-Bar1-1g_philoro_1_vdkroa.png"
              alt="Dukia Gold: Gold Bar 1 g - Philoro"
              width={350}
              height={550}
              className="w-auto h-auto"
            />
          </div>
        </div>
        <div className="bg-[#e8e9ed] flex flex-col p-20 rounded-2xl h-[620px]">
          <div className="flex flex-row">
            <div>
              <h3 className="font-manrope text-[32px] font-extrabold leading-[38.4px] tracking-[-0.03em] text-left text-dukiaBlue">
                Gold Coins
              </h3>
              <p className="font-manrope text-[15px] font-normal leading-[24px] tracking-[-0.03em] text-left pt-3">
                Get Access To LBMA Approved Gold Coins
              </p>
            </div>
            <div>
              <button className="bg-dukiaBlue text-white py-2 px-4 mt-10 flex items-center gap-2 rounded-md hover:bg-dukiaGold group">
                <Link href="/buy-gold/coins">
                  <span>Explore</span>
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 group-hover:hidden"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 hidden group-hover:block"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-grow flex items-end pt-40 lg:pt-20">
            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729375988/dukia-gold-coin-1oz-Canadian-Maple-Leaf_sxbdhz.png"
              alt="Dukia Gold: Gold Bar coin"
              width={700}
              height={700}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[linear-gradient(180deg,#F6F7F9_8.07%,#FBF7EB_100%)] mx-[430px] rounded-xl p-10">
        <div className="flex justify-between">
          <div className="p-8">
            <h4 className="font-manrope text-[32px] font-extrabold leading-[38.4px] tracking-[-0.03em]  text-dukiaBlue">
              Pool Allocated Buys
            </h4>
            <p className="font-manrope text-[15px] font-normal leading-[24px] tracking-[-0.03em] pt-4 text-left text-dukiaBlue">
              Buy Fractional Gold Assets. Set Amount Starting From ₦10,000
            </p>
          </div>
          <div className="">
            {/* <button
              className="bg-dukiaBlue text-white py-2 px-4 mr-6 mt-14 flex items-center gap-2 rounded-md hover:bg-dukiaGold group"
            >
              <span>Explore</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 group-hover:hidden"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 hidden group-hover:block"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
            </button> */}
          </div>
        </div>

        <div className="flex flex-row justify-between mx-6 gap-4">
          {items.map((item, index) => (
            <div className="bg-white rounded-xl" key={index}>
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729386042/Dust_soqtdr.png"
                alt="Dukia Gold: Gold Bar 1 g - Philoro"
                width={300}
                height={300}
                className="rounded-xl"
              />
              <div className="text-dukiaBlue space-y-2 m-4">
                <p className="text-[16px] font-semibold leading-[19.2px] tracking-[-0.03em]">
                  Fractional Gold
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[20px] font-extrabold leading-[30px] tracking-[-0.03em]">
                    {item.price}
                  </p>
                  <span className="flex items-center gap-3 text-dukiaBlue bg-dukiaGrey px-2 py-1 rounded-lg text-sm font-bold">
                    {item.weight}
                    <span className={`flex text-xs ${item.color}`}>
                      {item.changeType === "down" ? (
                        <ArrowDown size={16} />
                      ) : (
                        <ArrowUp size={16} />
                      )}
                      {item.change}
                    </span>
                  </span>
                </div>
                <button
                  onClick={() => {
                    if (token) {
                      router.push("/dashboard");
                    } else {
                      updateModals({ login: true });
                    }
                  }}
                  className="w-full py-2 mt-4 rounded-lg bg-dukiaGrey text-center text-dukiaBlue font-semibold hover:bg-dukiaGold"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  justify-between  px-[27rem] py-20 gap-7 mx-auto ">
        <div>
          <h4 className="text-[40px] text-dukiaBlue font-extrabold leading-[60px] tracking-[-0.03em]">
            Get <span className="text-dukiaGold">Access</span> to Your <br />{" "}
            Assets <span className="text-dukiaGold">Seamlessly</span>
          </h4>
          <p className="pt-5 text-sm text-dukiaBlue">
            With Dukia Gold cards, you can access your gold anytime <br />{" "}
            anywhere
          </p>
          <div className="flex px-2 py-10 gap-6">
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
                src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729391456/flat-color-icons_globe_c97zle.png"
                alt="Global"
                width={30}
                height={30}
              />
              <p className="text-[16px] font-normal leading-[24px] tracking-[-0.03em] pl-1 text-dukiaBlue">
                Global
              </p>
            </div>
            <div className="flex border border-blue-50 py-2 px-3 rounded-full">
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729391457/fluent-emoji-flat_timer-clock_txznzy.png"
                alt="24/7"
                width={30}
                height={30}
              />
              <p className="text-[16px] font-normal leading-[24px] tracking-[-0.03em] pl-1 text-dukiaBlue">
                {" "}
                24/7
              </p>
            </div>
          </div>
          {/* <button className="flex bg-[#fbf7eb] text-dukiaBlue text-[16px] px-4 py-3 rounded-xl font-semibold hover:bg-dukiaGold">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 ml-2"
            >
              <path
                fill-rule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button> */}
        </div>

        <Image
          src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729390084/cardss_pznvze.jpg"
          alt="Access to your assets"
          width={500}
          height={500}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Shop;
