import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface asFeaturedInArrayProps {
  key: number;
  logo: string;
  title: string;
  content: string;
  link: string;
}

const AsFeaturedIn = () => {
  const asFeaturedInArray: asFeaturedInArrayProps[] = [
    {
      key: 1,
      logo: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680798285/logo-for-web_jw1vic.webp",
      title: "Dukia to Trade Gold Bullion Bars on Lagos Commodities Exchange",
      content:
        "Dukia Gold and Precious Metals Refining Company Ltd., says it has completed arrangements to trade investment-grade gold bullion bars on the floor of the Lagos Commodities and Futures Exchange (LCFE)",
      link: "https://dmarketforces.com/dukia-to-trade-gold-bullion-bars-on-lagos-commodities-exchange/",
    },
    {
      key: 2,
      logo: "https://res.cloudinary.com/dvcw253zw/image/upload/f_auto/v1719398978/nth.png",
      title: "SEC Endorses Dukia Gold Sole Dealer, Refiner, Trader In Gold As Precious Metal",
      content:
        "The Securities and Exchange Commission, SEC, has endorsed Dukia Gold, as the only bonafide and designated legal entity for gold refining, bullion merchant (public trading of gold as an Investment Precious Metal IPM) and vaulting services provider in Nigeria for physical gold delivery on the capital market through the Lagos Commodities and Futures Exchange, LCFE.",
      link: "https://nigeriatransporthub.com.ng/sec-endorses-dukia-gold-sole-dealer-refiner-trader-in-gold-as-precious-metal/",
    },
    {
      key: 3,
      logo: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680794772/this-day-live-logo_cjby5z.png",
      title: "Dukia Gold, Philoro Sign Agreement to Deepen Precious Metals Value Chain",
      content:
        "Dukia Gold & Precious Metals Refining and Philoro Global Trading AG Switzerland have signed an agreement to collaborate in the development of small-scale and artisanal gold mining value chain in Africa.",
      link: "https://www.thisdaylive.com/index.php/2022/05/15/dukia-gold-philoro-sign-agreement-to-deepen-precious-metals-value-chain/",
    },
    {
      key: 4,
      logo: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680794514/site-logo_gh1xoo.svg",
      title: "Dukia to trade gold bullion bars on Lagos Commodities Exchange ",
      content:
        "Dukia Gold & Precious Metals Refining Company Limited has completed arrangements for the trading of fully refined London Bullion Market Association (LBMA) investment grade gold bullion bars, its derivatives and related products on the floor of the Lagos Commodities & Futures Exchange (LCFE).",
      link: "https://www.vanguardngr.com/2022/06/dukia-to-trade-gold-bullion-bars-on-lagos-commodities-exchange/",
    },
    {
      key: 5,
      logo: "https://res.cloudinary.com/dcu3hr3eo/image/upload/v1680794976/Businessday-Logo..._xyoqub.png",
      title: "FG launches Dukia gold, creates first precious metal refining market",
      content:
        "The Minister of Mines and Steel Development, Olamilekan Adegbite, will on Tuesday officially launch the commencement of the Dukia Gold & Precious Metals Raw Materials Buying Programme of Nigeria’s first gold and precious metals refining company, Dukia Gold and Precious Metals Refining Company Limited.",
      link: "https://businessday.ng/news/article/fg-launches-dukia-gold-creates-first-precious-metal-refining-market/",
    },
    {
      key: 6,
      logo: "https://res.cloudinary.com/dcu3hr3eo/image/upload/f_auto/v1680795407/guardian-conscience_dh8ucv.png",
      title: "Federal Government inaugurates first gold refining company",
      content:
        "The Federal Government, Tuesday, inaugurated Nigeria’s first Gold and precious Metals Refining Conglomerate, an operation of Dukia Gold a Precious Metals Raw Materials Buying Program in collaboration with Heritage Bank.",
      link: "https://guardian.ng/business-services/federal-government-inaugurates-first-gold-refining-company/",
    },
  ];

  return (
    <section className="px-2 md:px-8 py-12 bg-dukiaGrey text-dukiaBlue flex flex-col gap-14 items-center">
      <div className="flex flex-col gap-2 text-center">
        <p className="font-bold text-[1.75rem]">As Featured In</p>
        <p>
          Look at what various respectable publications have to say about Dukia
          Gold!
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full px-11"
      >
        <CarouselContent>
          {asFeaturedInArray.map((item) => (
            <CarouselItem
              key={item.key}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="rounded-2xl flex flex-col gap-2">
                {/* <CardHeader>
                  <Image src={item.logo} alt="platformLogo" width={30} height={30} />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader> */}
                <CardContent className="text-sm text-dukiaBlue flex flex-col gap-2 aspect-square p-4">
                  <div className="bg-dukiaGrey/[30%] rounded-lg w-full h-[176px] flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt="platformLogo"
                      width={270}
                      height={176}
                      className="rounded-lg -full h-full object-contain"
                    />
                  </div>

                  <p className="w-[100%] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.title}
                  </p>

                  <p className="line-clamp-5">{item.content}</p>
                  
                  <Link href={item.link} target="_blank" className="flex items-center gap-2 hover:text-dukiaGold">
                    <p className="font-semibold">
                      Read More
                    </p>
                    <ArrowRight size={17} />
                  </Link>
                </CardContent>
                {/* <CardFooter>
                  <p className="font-bold text-[0.875rem] text-white">
                    Read More
                  </p>
                  <ArrowRight />
                </CardFooter> */}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute text-white bg-dukiaBlue rounded-r-[50%] w-11 h-14 top-1/2 left-0" />
        <CarouselNext className="absolute text-white bg-dukiaBlue rounded-l-[50%] w-11 h-14 top-1/2 right-0" />
      </Carousel>
    </section>
  );
};

export default AsFeaturedIn;
