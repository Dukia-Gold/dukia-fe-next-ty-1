import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import useModalsStore from "@/store/modalsStore";

const Gift: React.FC = () => {
  const updateModals = useModalsStore((state: any) => state.updateModals);
  return (
    <div className="w-full h-full">
      <Carousel autoplay className="w-[1600px]">
        <div className="w-full h-auto">
          <div
            onClick={() => {
                updateModals({ gifting: true });
            }}
            className="cursor-pointer"
          >
            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/v1729517102/gifting_aggatx.png"
              alt="Image 1"
              width={1920}
              height={300}
            />
          </div>
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
