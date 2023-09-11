import Image from "next/image";
import React from "react";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <div className=" bg-gradient-to-b from-[#001826] to-[#00253100] bg-bottom-[length:1440_146px] h-[106px] flex items-start justify-between pt-6 pb-6 pl-[104px] pr-[101px]">
      <div className="inline-flex flex-col flex-start gap-[2px]">
        <Image
          src="/images/Rectangle.png"
          width={61}
          height={22}
          alt="logo"
        ></Image>
        <p className="text-white text-sm">CarpTravel</p>
      </div>
      <Navigation />
    </div>
  );
};
