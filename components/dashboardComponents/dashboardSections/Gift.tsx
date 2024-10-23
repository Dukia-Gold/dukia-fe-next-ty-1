import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";


const Gift: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Carousel autoplay className="w-[1600px]">
        <div className="w-full h-auto">
        <Link href="" passHref>
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729517102/gifting_aggatx.png"
            alt="Image 1"
            width={1920}
            height={300} 
            
          />
          </Link>
        </div>
        <div className="w-full h-auto">
        <Link href="/dashboard/exchange" passHref>
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729517100/exchange_i9ast6.png"
            alt="Image 2"
            width={1920}
            height={300} 
            
          />
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default Gift;
