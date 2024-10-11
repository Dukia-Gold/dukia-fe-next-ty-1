// import { useFetchGoldPriceNaira1g } from "@/api/fetchGoldPrice";

const WhoWeAre: React.FC = () => {
  // const { askNaira1g, fetchGoldPrice1g } = useFetchGoldPriceNaira1g();
  // const [askClass, setAskClass] = useState("");

  // useEffect(() => {
  //   fetchGoldPrice1g(); // Ensure initial fetch is called
  // }, [fetchGoldPrice1g]);

  // useEffect(() => {
  //   setAskClass("flash");
  //   const timeoutId = setTimeout(() => setAskClass(""), 1500);
  //   return () => clearTimeout(timeoutId);
  // }, [askNaira1g]);

  return (
    <section className="xl:max-w-[1066px] mx-auto flex flex-col gap-8 bg-white dark:bg-dukiaBlue dark:text-white text-dukiaBlue justify-between">
      <section className="pt-40 py-12 flex flex-col gap-14">
        {/* TEXTS */}
        <div className="flex justify-between gap-4 font-extrabold">
          <div className="space-y-1">
            <p className="text-[2.5rem]">Who We Are</p>

            <p className="text-[#676D88] text-xl">From Mine to Market</p>
          </div>

          <p className="text-base font-normal max-w-[519px]">
            Dukia Gold is the Foremost & Largest Full-Service Bullion Dealer in
            Nigeria, West Africa creating ease of access to investment grade
            gold & other precious metals in Nigeria via a safe and secure
            trading platform. Dukia Gold offers an easy, secure and accessible
            way to buy, sell, invest and do much more with gold. With Dukia
            Gold, you have full control and peace of mind over securing your
            financial future.
          </p>
        </div>

        {/* <div className="bg-[url(https://res.cloudinary.com/dvcw253zw/image/upload/v1723050005/whoWeAre_xynomy.png)] o">

        </div> */}

        <div className="w-full h-[499px] bg-[url(https://res.cloudinary.com/dvcw253zw/image/upload/v1723050005/whoWeAre_xynomy.png)] bg-cover rounded-2xl relative">
          <div className="absolute z-20 bg-white/[20%] rounded-[50%] top-[43%] left-[47%] p-7 cursor-pointer">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4592_2234)">
                <mask
                  id="mask0_4592_2234"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="29"
                  height="29"
                >
                  <path d="M0.5 0.5H28.5V28.5H0.5V0.5Z" fill="white" />
                </mask>
                <g mask="url(#mask0_4592_2234)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.323 18.287C29.2368 16.6035 29.2368 12.3965 26.323 10.7113L11.4393 2.10653C8.52375 0.421279 4.875 2.52653 4.875 5.89528V23.1048C4.875 26.4735 8.52375 28.5788 11.4393 26.8918L26.323 18.287Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_4592_2234">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* GOLD CARDS */}
        {/* <div className="flex flex-col items-center lg:flex-row justify-center gap-6">
          
          <Card className="dark:bg-white/[5%] shadow-2xl py-5 border-none rounded-2xl flex flex-col items-center w-[100%] md:w-[32.375rem] gap-5">
            <CardHeader>
              <CardTitle>Gold Bars</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718367921/Gold_Bar_ly3nbk.png"
                alt="Dukia Gold: Gold Bar 1 g - Philoro"
                width={350}
                height={350}
              />
            </CardContent>
            <CardFooter>
              <Link href="/buy-gold/bars">
                <button className="py-[0.875rem] border-2 font-semibold rounded-lg dark:border-[#D8DFEE] border-dukiaBlue/[25%] dark:hover:border-dukiaGold hover:border-dukiaBlue px-[1.875rem]">
                  Learn More
                </button>
              </Link>
            </CardFooter>
          </Card>

          
          <Card className="dark:bg-white/[5%] shadow-2xl py-5 border-none rounded-2xl flex flex-col items-center w-[100%] md:w-[32.375rem] gap-5">
            <CardHeader>
              <CardTitle>Gold Coins</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368347/Gold_Coin_yzjtdx.png"
                alt="Dukia Gold: Gold Bar 1 g - Philoro"
                width={350}
                height={350}
              />
            </CardContent>
            <CardFooter>
              <Link href="/buy-gold/bars">
                <button className="py-[0.875rem] border-2 font-semibold rounded-lg dark:border-[#D8DFEE] border-dukiaBlue/[25%] dark:hover:border-dukiaGold hover:border-dukiaBlue px-[1.875rem]">
                  Learn More
                </button>
              </Link>
            </CardFooter>
          </Card>
        </div> */}
      </section>

      {/* Pool Allocated Buys */}
      {/* <section className="md:container py-12 overflow-auto flex flex-col md:items-center gap-14">
        <p className="font-bold text-[1.75rem] text-left md:text-center">
          Pool Allocated Buys
        </p>

        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          <div className="dark:bg-white/[5%] shadow-2xl relative w-full md:w-[25rem] h-[25rem] rounded-2xl flex flex-col items-center justify-center">
            <div className="absolute top-20 right-0 bg-dukiaBlue py-4 px-7 rounded-bl-lg rounded-tl-lg">
              <p className={`${askClass} font-semibold text-white`}>
                {askNaira1g ? formatDecimal(10000 / askNaira1g, 4) : 0.0} gram
              </p>
            </div>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368328/Pool_Allocated_Gold_ssodrg.png"
              alt=""
              width={330}
              height={330}
            />

            <div className="absolute rounded-b-2xl bottom-0 left-0 w-full">
              <div className="relative w-full flex flex-col items-center">
                <div className="rounded-b-2xl w-full h-full absolute top-0 left-0 bg-white dark:bg-dukiaDark opacity-25"></div>
                <div className="z-20 flex items-center justify-between w-full py-4 px-3 md:px-6 lg:px-12 font-semibold text-lg">
                  <div>
                    <p>Fractional Gold</p>
                    <p className="font-extrabold text-2xl">
                      {formatCurrency(10000)}
                    </p>
                  </div>

                  <button className="px-4 py-2 text-white bg-dukiaBlue rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dark:bg-white/[5%] shadow-2xl relative w-full md:w-[25rem] h-[25rem] rounded-2xl flex flex-col items-center justify-center">
            <div className="absolute top-20 right-0 bg-dukiaBlue py-4 px-7 rounded-bl-lg rounded-tl-lg">
              <p className={`${askClass} font-semibold text-white`}>
                {askNaira1g ? formatDecimal(15000 / askNaira1g, 4) : 0.0} gram
              </p>
            </div>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368328/Pool_Allocated_Gold_ssodrg.png"
              alt=""
              width={330}
              height={330}
            />

            <div className="absolute rounded-b-2xl bottom-0 left-0 w-full">
              <div className="relative w-full flex flex-col items-center">
                <div className="rounded-b-2xl w-full h-full absolute top-0 left-0 bg-white dark:bg-dukiaDark opacity-25"></div>
                <div className="z-20 flex items-center justify-between w-full py-4 px-3 md:px-6 lg:px-12 font-semibold text-lg">
                  <div>
                    <p>Fractional Gold</p>
                    <p className="font-extrabold text-2xl">
                      {formatCurrency(15000)}
                    </p>
                  </div>

                  <button className="px-4 py-2 text-white bg-dukiaBlue rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dark:bg-white/[5%] lg:col-start-1 2xl:col-start-3 lg:col-end-3 shadow-2xl relative w-full md:w-auto h-[25rem] rounded-2xl flex flex-col items-center justify-center">
            <div className="absolute top-20 right-0 bg-dukiaBlue py-4 px-7 rounded-bl-lg rounded-tl-lg">
              <p className={`${askClass} font-semibold text-white`}>
                {askNaira1g ? formatDecimal(20000 / askNaira1g, 4) : 0.0} gram
              </p>
            </div>

            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1718368328/Pool_Allocated_Gold_ssodrg.png"
              alt=""
              width={330}
              height={330}
            />

            <div className="absolute rounded-b-2xl bottom-0 left-0 w-full">
              <div className="relative w-full flex flex-col items-center">
                <div className="rounded-b-2xl w-full h-full absolute top-0 left-0 bg-white dark:bg-dukiaDark opacity-25"></div>
                <div className="z-20 flex items-center justify-between w-full py-4 px-3 md:px-6 lg:px-12 font-semibold text-lg">
                  <div>
                    <p>Fractional Gold</p>
                    <p className="font-extrabold text-2xl">
                      {formatCurrency(20000)}
                    </p>
                  </div>

                  <button className="px-4 py-2 text-white bg-dukiaBlue rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default WhoWeAre;
