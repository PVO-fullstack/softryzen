import React from "react";

export const ServicesList = ({ swiperEl }) => {
  return (
    <div className="desktop:row-span-2 desktop:w-[236px] tablet:mt-10 z-10 mt-6 desktop:mt-5 flex flex-col gap-4 desktop:gap-6 tablet:w-[186px]  tablet:order-1 ">
      <p
        onClick={() => swiperEl.swiper.slideTo(0)}
        className="desktop:text-[28px] desktop:leading-normal text-white text-xl font-medium uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px]"
      >
        ATVs Traveling
      </p>
      <p
        onClick={() => swiperEl.swiper.slideTo(1)}
        className="desktop:text-[28px] desktop:leading-normal opacity-50 text-white text-xl font-extralight uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px] "
      >
        Rock climbing
      </p>
      <p
        onClick={() => swiperEl.swiper.slideTo(2)}
        className="desktop:text-[28px] desktop:leading-normal opacity-50 text-white text-xl font-extralight uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px]"
      >
        Hot air ballooning
      </p>
      <p className="desktop:text-[28px] desktop:leading-normal opacity-50 text-white text-xl font-extralight uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px]">
        Skydiving
      </p>
      <p className="desktop:text-[28px] desktop:leading-normal opacity-50 text-white text-xl font-extralight uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px]">
        Rafting
      </p>
    </div>
  );
};
