import React from "react";
import { Card, CardContent } from "../ui/card";

const Portfolio = () => {
  return (
    <div className="xl:col-span-2 px-6 py-4 border border-dukiaBlue/[5%] rounded-lg bg-white space-y-3 text-dukiaBlue">
      <div className="flex items-center justify-between">
        <p className="font-semibold">My Portfolio</p>

        <div className="flex gap-2">
          {/* Left */}
          <div className="p-5 bg-dukiaGrey rounded-[50%] cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_395_3186)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.91169 9.41071C6.75546 9.56698 6.6677 9.77891 6.6677 9.99988C6.6677 10.2208 6.75546 10.4328 6.91169 10.589L11.6259 15.3032C11.7027 15.3828 11.7947 15.4463 11.8963 15.49C11.998 15.5336 12.1074 15.5566 12.218 15.5576C12.3287 15.5585 12.4384 15.5375 12.5408 15.4956C12.6432 15.4537 12.7363 15.3918 12.8145 15.3135C12.8928 15.2353 12.9546 15.1423 12.9965 15.0398C13.0384 14.9374 13.0595 14.8277 13.0586 14.717C13.0576 14.6064 13.0346 14.497 12.9909 14.3954C12.9473 14.2937 12.8838 14.2017 12.8042 14.1249L8.67919 9.99988L12.8042 5.87488C12.956 5.71771 13.04 5.50721 13.0381 5.28871C13.0362 5.07021 12.9485 4.8612 12.794 4.70669C12.6395 4.55219 12.4305 4.46455 12.212 4.46265C11.9935 4.46075 11.783 4.54474 11.6259 4.69654L6.91169 9.41071Z"
                  fill="#111827"
                />
              </g>
              <defs>
                <clipPath id="clip0_395_3186">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(0 -1 -1 0 20 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Right */}
          <div className="p-5 bg-dukiaGrey rounded-[50%] cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_395_3189)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.0883 9.41071C13.2445 9.56698 13.3323 9.77891 13.3323 9.99988C13.3323 10.2208 13.2445 10.4328 13.0883 10.589L8.37415 15.3032C8.29727 15.3828 8.20532 15.4463 8.10365 15.49C8.00198 15.5336 7.89263 15.5566 7.78198 15.5576C7.67133 15.5585 7.5616 15.5375 7.45919 15.4956C7.35677 15.4537 7.26373 15.3918 7.18548 15.3135C7.10724 15.2353 7.04536 15.1423 7.00346 15.0398C6.96156 14.9374 6.94048 14.8277 6.94144 14.717C6.9424 14.6064 6.96539 14.497 7.00906 14.3954C7.05274 14.2937 7.11622 14.2017 7.19581 14.1249L11.3208 9.99988L7.19581 5.87488C7.04401 5.71771 6.96002 5.50721 6.96192 5.28871C6.96382 5.07021 7.05146 4.8612 7.20596 4.70669C7.36047 4.55219 7.56948 4.46455 7.78798 4.46265C8.00648 4.46075 8.21698 4.54474 8.37415 4.69654L13.0883 9.41071Z"
                  fill="#111827"
                />
              </g>
              <defs>
                <clipPath id="clip0_395_3189">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(0 -1 1 0 0 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-4">
        <Card className="bg-[#C6DEF1]">
          <CardContent className="py-4 space-y-4">
            <p className="font-medium">Naira (₦)</p>
            <p className="text-xl font-bold">₦ 2,500,000</p>
          </CardContent>
        </Card>

        <Card className="bg-[#DBCDF0]">
          <CardContent className="py-4 space-y-4">
            <p className="font-medium">Gold (Au)</p>
            <p className="text-xl font-bold">₦ 2,500,000</p>
          </CardContent>
        </Card>

        <Card className="bg-[#F2C6DE]">
          <CardContent className="py-4 space-y-4">
            <p className="font-medium">Silver (Ag)</p>
            <p className="text-xl font-bold">₦ 2,500,000</p>
          </CardContent>
        </Card>

        <Card className="bg-[#C9E4DE]">
          <CardContent className="py-4 space-y-4">
            <p className="font-medium">Naira (₦)</p>
            <p className="text-xl font-bold">₦ 2,500,000</p>
          </CardContent>
        </Card>

        <Card className="bg-[#F7D9C4]">
          <CardContent className="py-4 space-y-4">
            <p className="font-medium">Bitcoin (BTC)</p>
            <p className="text-xl font-bold">₦ 2,500,000</p>
          </CardContent>
        </Card>

        <Card className="bg-[#FAEDCB]">
          <CardContent className="py-4 space-y-4">
            <p className="font-medium">Naira (₦)</p>
            <p className="text-xl font-bold">₦ 2,500,000</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
