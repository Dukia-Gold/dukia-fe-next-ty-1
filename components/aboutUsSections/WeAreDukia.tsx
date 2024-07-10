interface WeAreDukiaProps {
  nextSectionRef: React.RefObject<HTMLElement>;
}

const WeAreDukia = ({ nextSectionRef }: WeAreDukiaProps) => {
  return (
    <section
      ref={nextSectionRef}
      className="px-2.5 md:px-5 lg:px-10 xl:px-20 py-14 flex flex-col gap-10 text-dukiaBlue dark:bg-dukiaBlue dark:text-white"
    >
      <div className="grid xl:grid-cols-2 gap-5 xl:gap-10">
        {/* <div className="h-96 md:h-[37.5rem] lg:h-[40rem] xl:h-auto w-full bg-dukiaGrey rounded-2xl  bg-cover bg-center" style={{ backgroundImage: 'url(https://dukiagoldrefinery.co/images/sq_img_2.jpg)' }}></div> */}

        <div className="bg-dukiaGrey dark:bg-white/[5%] rounded-2xl  bg-cover bg-center"></div>

        <div className="flex flex-col gap-2">
          <p className="font-bold text-3xl">We Are Dukia Gold</p>
          <p className="text-lg">
            Dukia Gold is the Foremost & Largest Full-Service Bullion Dealer in
            Nigeria, West Africa creating ease of access to investment grade
            gold & other precious metals in Nigeria via a safe and secure
            trading platform. Dukia Gold offers an easy, secure and accessible
            way to buy, sell, invest and do much more with gold. With Dukia
            Gold, you have full control and peace of mind over securing your
            financial future. <br /> <br />
            Dukia Gold is a gold and precious metals refiner and the only
            full-service bullion-merchant in Nigeria, West Africa. Dukia Gold
            aggregates responsibly sourced raw materials such as gold dore and
            other precious metal materials, and refines it into investment grade
            ‘good delivery’ bar or coin. Dukia sells its finished products to
            high networth individuals and corporate investors such as banks and
            other financial institutions, including discerning corporates &
            individuals. <br /> <br />
            The ‘Good Delivery’ bar presented by Dukia Gold for sale in the
            investment marketplace is of .9999 purity and will afford the
            investor the opportunity to buy a product with high intrinsic value
            and an assured market when the investor chooses to liquidate its
            investment.
          </p>
        </div>
      </div>

      <div>
        <p className="text-lg">
          Dukia Gold is the Foremost & Largest Full-Service Bullion Dealer in
          Nigeria, West Africa creating ease of access to investment grade gold
          & other precious metals in Nigeria via a safe and secure trading
          platform. Dukia Gold offers an easy, secure and accessible way to buy,
          sell, invest and do much more with gold. With Dukia Gold, you have
          full control and peace of mind over securing your financial future.{" "}
          <br /> <br />
          Dukia Gold was incorporated on March 4, 2019 with RC 1564963 as a
          Special Purpose Company with the sole responsibility of manufacturing,
          refining, minting as well as trading in Gold and Precious Metal
          Bullion, Bars and Coins. With this, Dukia Gold set out on a journey
          that puts Nigeria on the global map and at par with the major Gold &
          Precious Metals refining and producing nations. <br />
          <br />
          Dukia Gold obtained its license as a refinery on May 15, 2019 and
          assembled the necessary right of way, plant, machinery and equipment
          including every other activity essential for the commencement of
          profitable and sustainable operations. <br />
          <br />
          Though formally constituted in 2019, the people constituted as Dukia
          Gold management has between them over 200years of hands on experience
          of the Gold and other Precious Metals sector both internationally and
          nationally. More importantly most of the management had been
          informally working together within the sector for at least 10 years
          pre-incorporation of Dukia Gold <br />
          <br />
          Dukia Gold has achieved success in its OECD & LBMA compliant gold
          sourcing program under its Urban and Rural mining initiatives that
          create high-grade recyclable household and residual gold and mineral
          ores across Nigeria. <br />
          <br />
          The &apos;Good Delivery&apos; bar presented by Dukia Gold for sale in
          the investment marketplace is of .9999 purity and will afford the
          investor the opportunity to buy a product with high intrinsic value
          and an assured market when the investor chooses to liquidate its
          investment.
        </p>
      </div>

      <div className="grid xl:grid-cols-2 gap-3 xl:gap-6">
        {/* VISON AND MISSION */}
        <div className="flex flex-col gap-6">
          {/* VISION */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Our Vision</p>

            <p className="text-lg">
              To be recognised as &apos;The Gold Standard&apos; across the gold
              value chain in Africa, as an LBMA accredited processor and largest
              exporter of gold and other precious metal products from Nigeria.
            </p>
          </div>

          {/* MISSION */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Our Mission</p>

            <p className="text-lg">
              To establish as a full-service bullion merchant and the first LBMA
              accredited Precious Metals refinery of its kind to locally produce
              good delivery investment bars and other bullion products for sale
              to investors and consumers and boost financial returns to miners &
              other stakeholders in the precious metals value chain.
            </p>
          </div>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-3 xl:gap-6">
          <div className="bg-dukiaGrey dark:bg-white/[5%] rounded-2xl "></div>

          <div className="bg-dukiaGrey dark:bg-white/[5%] rounded-2xl "></div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="text-dukiaBlue dark:text-white text-center flex flex-col gap-2">
          <p className="font-bold text-3xl">Our Gallery</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur. In morbi hac aliquam lacus.
            Lacus tristique euismod volutpat porttitor amet aliquet egestas.
            Porttitor ac purus metus quam blandit ipsum erat eget. Metus lectus
            auctor eu eros orci dui donec diam suspendisse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10">
          <div className="h-72 bg-dukiaGrey dark:bg-white/[5%] rounded-2xl "></div>
          <div className="h-72 bg-dukiaGrey dark:bg-white/[5%] rounded-2xl "></div>
          <div className="h-72 bg-dukiaGrey dark:bg-white/[5%] rounded-2xl "></div>
          <div className="h-72 bg-dukiaGrey dark:bg-white/[5%] rounded-2xl "></div>
          <div className="h-72 bg-dukiaGrey dark:bg-white/[5%] rounded-2xl "></div>
          <div className="h-72 bg-dukiaGrey dark:bg-white/[5%] rounded-2xl "></div>
          <div className="h-72 bg-dukiaGrey dark:bg-white/[5%] rounded-2xl "></div>
          <div className="h-72 bg-dukiaGrey dark:bg-white/[5%] rounded-2xl "></div>
        </div>
      </div>
    </section>
  );
};

export default WeAreDukia;
