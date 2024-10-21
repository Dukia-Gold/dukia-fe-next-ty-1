import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  className?: string;
  image?: string;
};

const GridOption = ({ title, description, className, image }: Props) => {
  return (
    <Link
      href={{
        pathname: "/dashboard/buy-gold/dukia-gold-catalogue",
        query: { q: title },
      }}
      className="grid"
    >
      <div
        className={cn(
          "bg-white rounded-xl group border hover:border-4 hover:border-dukiaBlue focus-within:border-dukiaBlue flex flex-col",
          className
        )}
      >
        <div className="flex h-[27.4375rem] items-center justify-center">
          {image && (
            <Image
              src={image}
              alt={title}
              width={341}
              height={439}
              className="h-[27.4375rem] w-auto"
            />
          )}
        </div>
        <div className="py-[1.21875rem] px-4">
          <div className="grid grid-cols-12">
            <p className="font-manrope text-[1.25rem] font-extrabold leading-[1.875rem] tracking-[-0.03rem] text-left text-dukiaBlue col-span-11">
              {title}
            </p>
            <div className="col-span-1 ">
              <svg
                className="block group-hover:hidden"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="28" height="28" rx="14" fill="#E8E9ED" />
                <g clip-path="url(#clip0_4450_2772)">
                  <path
                    d="M14.6455 9.62623C14.7862 9.47625 14.9769 9.392 15.1758 9.392C15.3747 9.392 15.5654 9.47625 15.706 9.62623L19.081 13.2262C19.2216 13.3762 19.3006 13.5797 19.3006 13.7918C19.3006 14.004 19.2216 14.2074 19.081 14.3574L15.706 17.9574C15.5646 18.1032 15.3751 18.1838 15.1785 18.182C14.9818 18.1801 14.7937 18.096 14.6547 17.9477C14.5156 17.7994 14.4367 17.5987 14.435 17.3889C14.4333 17.1792 14.5089 16.9771 14.6455 16.8262L16.6758 14.5918H9.55078C9.35187 14.5918 9.1611 14.5075 9.02045 14.3575C8.8798 14.2075 8.80078 14.004 8.80078 13.7918C8.80078 13.5797 8.8798 13.3762 9.02045 13.2261C9.1611 13.0761 9.35187 12.9918 9.55078 12.9918H16.6758L14.6455 10.7574C14.5049 10.6074 14.4259 10.404 14.4259 10.1918C14.4259 9.9797 14.5049 9.77625 14.6455 9.62623Z"
                    fill="#1C254E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4450_2772">
                    <rect
                      width="11.25"
                      height="12"
                      fill="white"
                      transform="translate(8.42578 7.79205)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                className="hidden group-hover:block"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="28" height="28" rx="14" fill="#1C254E" />
                <g clipPath="url(#clip0_4450_2759)">
                  <path
                    d="M12.1447 10.0388C12.1739 9.83527 12.2818 9.65686 12.4448 9.54279C12.6077 9.42872 12.8122 9.38834 13.0135 9.43052L17.843 10.4436C18.0442 10.4859 18.2256 10.6072 18.3473 10.781C18.4689 10.9548 18.5209 11.1667 18.4918 11.3703L17.792 16.255C17.7597 16.4555 17.6508 16.6303 17.4887 16.7416C17.3266 16.8529 17.1242 16.8918 16.9252 16.8501C16.7262 16.8084 16.5465 16.6892 16.4248 16.5184C16.3031 16.3475 16.2491 16.1387 16.2745 15.9367L16.656 12.9419L10.8195 17.0286C10.6566 17.1427 10.452 17.1831 10.2507 17.1409C10.0494 17.0986 9.86799 16.9773 9.74629 16.8035C9.6246 16.6297 9.57261 16.4177 9.60177 16.2141C9.63094 16.0105 9.73886 15.8321 9.9018 15.718L15.7383 11.6312L12.7936 10.9654C12.5923 10.9232 12.411 10.8018 12.2893 10.6281C12.1676 10.4543 12.1156 10.2423 12.1447 10.0388Z"
                    fill="#E8E9ED"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4450_2759">
                    <rect
                      width="11.25"
                      height="12"
                      fill="white"
                      transform="translate(6 12.1036) rotate(-35)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <p className="pt-[0.625rem]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default GridOption;
