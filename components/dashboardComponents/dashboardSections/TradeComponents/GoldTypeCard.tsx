import React from "react";
import Image from "next/image";

interface GoldTypeCardProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

const GoldTypeCard: React.FC<GoldTypeCardProps> = ({
  label,
  isActive,
  onClick,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}) => (
  <div
    onClick={onClick}
    className={`${
      isActive
        ? "border-dukiaBlue border-2 text-dukiaBlue"
        : "border-[#E8E9ED] border-[1.5px]"
    } h-[3.5rem] flex items-center justify-end pr-2.5 rounded-lg cursor-pointer relative pl-[50%] text-right`}
  >
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
      className="absolute bottom-0 left-0 w-auto h-auto rounded-bl-lg"
    />
    {label}
  </div>
);

export default GoldTypeCard;
