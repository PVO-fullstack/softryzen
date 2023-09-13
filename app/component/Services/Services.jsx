import Image from "next/image";
import React from "react";
import style from "./Services.module.css";

export const Services = ({ Component, pageProps }) => {
  return (
    <div className={style.bg}>
      <div className={style.overlay}>
        <div className=" tablet:gap-5 desktop:gap-0 px-5 py-14 grid tablet:px-8 tablet:py-16 tablet:auto-cols-auto tablet:auto-rows-auto desktop:p-[104px] ">
          <div className="z-10 tablet:w-[313px] desktop:w-[458px] ">
            <h1
              id="services"
              className="text-white text-[40px] font-thin uppercase leading-[56px] tablet:text-[67px] desktop:text-[98px] "
            >
              WE <span className="font-medium">OFFER</span>
            </h1>
          </div>
          <div className=" desktop:w-[244px] desktop:col-span-2 desktop:col-start-2 tablet:justify-self-start tablet:mt-0 z-10 mt-6 justify-self-end tablet:w-[167px] tablet:col-start-2  ">
            <p className="text-white text-[43px] font-thin tablet:text-[67px] tablet:leading-[78px] desktop:text-[98px]">
              01/
              <span className="text-white text-opacity-20 text-[43px] font-thin tablet:text-[67px] tablet:leading-[78px] desktop:text-[98px] ">
                05
              </span>
            </p>
          </div>
          <Image
            className="desktop:w-[710px] desktop:h-[492px] desktop:mt-[39px] tablet:mt-[34px] tablet:row-span-3 desktop:row-span-2 mt-[19px] z-10 block w-[287px] h-[213px] tablet:w-[471px] tablet:h-[345] "
            src="/images/quadro.jpg"
            width={710}
            height={492}
            alt="quadro"
          />
          <div className=" justify-self-end desktop:w-[293px] tablet:mt-[25px] z-10 mt-3 tablet:w-[188px] tablet:order-2">
            <p className=" text-right tablet:text-left text-white text-xs font-extralight leading-normal tracking-widest ">
              Feel the adrenaline rush
            </p>
          </div>
          <div className="desktop:row-span-2 desktop:w-[236px] tablet:mt-10 z-10 mt-6 desktop:mt-5 flex flex-col gap-4 desktop:gap-6 tablet:w-[186px]  tablet:order-1 ">
            <p className="desktop:text-[28px] desktop:leading-normal text-white text-xl font-medium uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px]">
              ATVs Traveling
            </p>
            <p className="desktop:text-[28px] desktop:leading-normal opacity-50 text-white text-xl font-extralight uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px] ">
              Rock climbing
            </p>
            <p className="desktop:text-[28px] desktop:leading-normal opacity-50 text-white text-xl font-extralight uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px]">
              Hot air ballooning
            </p>
            <p className="desktop:text-[28px] desktop:leading-normal opacity-50 text-white text-xl font-extralight uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px]">
              Skydiving
            </p>
            <p className="desktop:text-[28px] desktop:leading-normal opacity-50 text-white text-xl font-extralight uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px]">
              Rafting
            </p>
          </div>
          <div className="  justify-self-end  desktop:w-[293px] tablet:mt-[34px] z-10 mt-[34px] tablet:w-[221px] tablet:order-3">
            <p className="desktop:text-lg desktop:leading-normal text-white text-sm font-extralight leading-tight tablet:text-justify tablet:text-[13px]">
              Join exciting rafting expeditions on the waterways of the
              Carpathians. Go through challenging waterways and overcome gusty
              waves, feel the adrenaline, and enjoy the incredible views of the
              surrounding mountains.
            </p>
          </div>
        </div>
        <div className={style.top_overlay}></div>
        <div className={style.bottom_overlay}></div>
      </div>
    </div>
  );
};
