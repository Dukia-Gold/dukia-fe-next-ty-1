import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const AsFeatured = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    {
      id: 1,
      default:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468218/Property_1_vanguard_default_usky3i.png",
      hover:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468213/Property_1_vanguard_animated_uyf3id.png",
      alt: "Vanguard",
      link: "https://www.vanguardngr.com/2022/06/dukia-to-trade-gold-bullion-bars-on-lagos-commodities-exchange/",
    },
    {
      id: 2,
      default:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468219/Property_1_this_day_default_snqtpx.png",
      hover:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468213/Property_1_this_day_animated_a4zwia.png",
      link: "https://www.thisdaylive.com/index.php/2022/05/15/dukia-gold-philoro-sign-agreement-to-deepen-precious-metals-value-chain/",
      alt: "This Day",
    },
    {
      id: 1,
      default:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468220/Property_1_independent_default_ahsuvd.png",
      hover:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468214/Property_1_independent_animated_rvejhb.png",
      link: "https://independent.ng/dukia-to-trade-gold-bullion-bars-on-lagos-commodities-exchange/",
      alt: "Vanguard",
    },
    {
      id: 2,
      default:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468222/Property_1_busniness_day_default_khlior.png",
      hover:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468215/Property_1_business_day_animated_iqvfvh.png",
      alt: "Business Day",
      link: "https://businessday.ng/news/article/fg-launches-dukia-gold-creates-first-precious-metal-refining-market/",
    },
    {
      id: 1,
      default:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468235/Property_1_force_africa_default_ppg16p.png",
      hover:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468229/Property_1_force_africa_animated_zq08lk.png",
      alt: "Vanguard",
      link: "https://dmarketforces.com/dukia-to-trade-gold-bullion-bars-on-lagos-commodities-exchange/",
    },
    {
      id: 2,
      default:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468233/Property_1_NTH_deafult_yaukpr.png",
      hover:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468227/Property_1_NTH_animated_aib2pj.png",
      link: "https://nigeriatransporthub.com.ng/sec-endorses-dukia-gold-sole-dealer-refiner-trader-in-gold-as-precious-metal/",
      alt: "This Day",
    },
    {
      id: 1,
      default:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468232/Property_1_NIPC_default_mojs2v.png",
      hover:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468226/Property_1_NIPC_animated_lyq6a0.png",
      alt: "Vanguard",
      link: "https://www.nipc.gov.ng/2022/05/14/dukia-gold-philoro-collaborate-to-boost-precious-metals-value-chain/",
    },
    {
      id: 2,
      default:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468230/Property_1_Guardian_default_cvc8xd.png",
      hover:
        "https://res.cloudinary.com/dvcw253zw/image/upload/v1729468223/Property_1_Guardian_animated_xoonzl.png",
      alt: "This Day",
      link: "https://guardian.ng/business-services/federal-government-inaugurates-first-gold-refining-company/",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: "linear",
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h3 className="text-dukiaBlue text-[40px] font-extrabold leading-[60px] tracking-[-0.03em] text-center pt-20">
        As Featured In
      </h3>
      <h5 className="text-[#676D88] text-[20px] font-extrabold leading-[30px] tracking-[-0.03em] text-center pt-4">
        What various respectable publications have to say about Dukia Gold!
      </h5>

      <div className="px-4 lg:px-8 xl:px-[420px]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className="p-2 mt-2 mb-3"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={image.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={hoveredIndex === index ? image.hover : image.default}
                    alt={image.alt}
                    width={250}
                    height={250}
                  />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AsFeatured;
