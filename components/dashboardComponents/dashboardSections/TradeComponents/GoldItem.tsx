import React from "react";

interface GoldItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  padding?: string; // Optional padding prop
}

const GoldItem: React.FC<GoldItemProps> = ({
  label,
  isSelected,
  onClick,
  padding,
}) => (
  <div
    onClick={onClick}
    className={`${
      isSelected ? "text-white bg-dukiaBlue" : "border-[1.5px] border-[#E8E9ED]"
    } ${padding} rounded-lg cursor-pointer hover:bg-dukiaBlue hover:text-white`}
  >
    {label}
  </div>
);

export default GoldItem;
