import Image from "next/image";
import React from "react";

const AssetCard = ({ item, id }: { item: any; id: string }) => {
  return (
    <div
      key={item.id}
      className={`${
        item.id === id ? "border-2 border-dukiaBlue" : "border border-[#E8E9ED]"
      } p-2.5 bg-white rounded-lg flex items-center gap-3`}
    >
      {item.type === "bar" ? (
        <div className="bg-[#E8E9ED] w-7 h-7 rounded-[50%] flex items-center justify-center border border-[#E8E9ED]">
          <Image
            src={item.thumbnail_url}
            alt={item.name}
            width={18.67}
            height={10.97}
            className="-rotate-90"
          />
        </div>
      ) : (
        <Image
          src={item.thumbnail_url}
          alt={item.name}
          width={28}
          height={28}
          className="h-auto w-auto rounded-[50%]"
        />
      )}

      <p className="text-xs font-semibold">{item.name}</p>
    </div>
  );
};

export default AssetCard;
