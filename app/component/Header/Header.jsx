import Image from "next/image";
import React from "react";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <div className="flex justify-between mobile:mx-5 mobile:pt-9 mobile:items-center tablet:mx-8  desktop:h-[106px] desktop:pt-6 desktop:pb-6 desktop:pl-[104px] desktop:pr-[101px] z-10">
      <div className="inline-flex flex-col flex-start gap-[2px] z-10">
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
