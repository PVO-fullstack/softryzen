import React, { useState } from "react";
import { useSwiper } from "swiper/react";

export const Controll = ({ setOffer }) => {
  const swiper = useSwiper();
  const [active, setactive] = useState("0");

  const item =
    "opacity-50 text-white text-xl font-extralight uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px] desktop:text-[28px] desktop:leading-[24px]";

  const activeItem =
    " before:content-[''] before:w-1.5 before:h-1.5 before:rotate-45 before:bg-white flex items-center gap-2 text-white text-xl font-medium uppercase leading-[17px] tablet:text-[22px] tablet:leading-[18px] desktop:text-[28px] desktop:leading-[24px]";

  const handleSetTraveling = () => {
    swiper.slideTo(0);
    setactive("0");
    setOffer("traveling");
  };

  const handleSetClimbing = () => {
    swiper.slideTo(1);
    setactive("1");
    setOffer("climbing");
  };

  const handleSetBalloon = () => {
    swiper.slideTo(2);
    setactive("2");
    setOffer("balloon");
  };

  const handleSetDiving = () => {
    swiper.slideTo(3);
    setactive("3");
    setOffer("diving");
  };

  const handleSetRafting = () => {
    swiper.slideTo(4);
    setactive("4");
    setOffer("rafting");
  };

  return (
    <div className=" desktop:right-0 mt-[60px] tablet:absolute tablet:top-0 tablet:right-[31px] tablet:mt-0 desktop:row-start-2 desktop:w-[236px] z-10 flex flex-col gap-4 desktop:gap-6 tablet:w-[190px]  tablet:order-1 ">
      <p
        onClick={handleSetTraveling}
        className={active === "0" ? activeItem : item}
      >
        ATVs Traveling
      </p>
      <p
        onClick={handleSetClimbing}
        className={active === "1" ? activeItem : item}
      >
        Rock climbing
      </p>
      <p
        onClick={handleSetBalloon}
        className={active === "2" ? activeItem : item}
      >
        Hot air ballooning
      </p>
      <p
        onClick={handleSetDiving}
        className={active === "3" ? activeItem : item}
      >
        Skydiving
      </p>
      <p
        onClick={handleSetRafting}
        className={active === "4" ? activeItem : item}
      >
        Rafting
      </p>
    </div>
  );
};
