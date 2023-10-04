import Image from "next/image";
import React from "react";
import { Navigation } from "../Navigation/Navigation";
import Link from "next/link";
import { Karantina } from "next/font/google";

const katarina = Karantina({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-katarina",
});

export const Header = () => {
  return (
    <header className="flex justify-between px-5 py-9 items-center tablet:px-8 tablet:pb-[66px] desktop:pt-6 desktop:pb-[88px] desktop:pl-[104px] desktop:pr-[101px] z-10">
      <div className="inline-flex flex-col flex-start gap-[2px] z-10">
        <Link href="/">
          <Image
            src="/images/Rectangle.png"
            priority
            width={61}
            height={22}
            alt="logo"
          ></Image>
          <p className="text-white text-sm font-katarina">CarpTravel</p>
        </Link>
      </div>
      <Navigation />
    </header>
  );
};
