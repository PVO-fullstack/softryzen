"use client";
import React, { useEffect, useState } from "react";
import style from "./Services.module.css";
import { OffersSwiper } from "@/app/component/Swiper/Swiper";
import offers from "../../data/offers.json";
import { Call } from "@/app/component/Call/Call";

export const Services = ({ Component, pageProps }) => {
  const [offer, setOffer] = useState();
  const [date, setDate] = useState(offers[0].date);
  const [call, setCall] = useState(offers[0].call);
  const [description, setDescription] = useState(offers[0].description);
  const [bg, setBg] = useState("traveling");

  useEffect(() => {
    const change = () => {
      offers.map(({ offerName, date, call, description }) => {
        if (offerName === offer) {
          setDate(date);
          setCall(call);
          setDescription(description);
          setBg(offerName);
        }
      });
    };
    change();
  }, [offer]);

  const handleSet = (offer) => {
    setOffer(offer);
  };

  return (
    <section id="services" className={style.bg + " " + style[bg]}>
      <div className="px-5 py-14 grid columns-1 tablet:px-8 tablet:py-16 tablet:auto-cols-auto tablet:auto-rows-auto desktop:p-[104px] ">
        <div className=" desktop:mb-[18px] tablet:flex tablet:items-center tablet:gap-[170px] tablet:col-span-2 desktop:gap-[162px] desktop:col-span-2">
          <h2 className="text-white text-[40px] font-thin uppercase leading-[56px] -tracking-[1.6px] tablet:-tracking-[2.68px] tablet:text-[67px] desktop:text-[98px] ">
            WE <span className="font-medium">OFFER</span>
          </h2>
          <p className="text-white text-[43px] leading-[52px] font-thin mt-6 text-end tablet:mt-0 tablet:text-[67px] tablet:leading-[81px] desktop:text-[98px]">
            {`${date}/`}
            <span className="text-white text-opacity-20 text-[43px] font-thin tablet:text-[67px] tablet:leading-[81px] desktop:text-[98px] ">
              05
            </span>
          </p>
        </div>
        <div className=" desktop:w-[974px] desktop:row-span-2 desktop:mt-5 tablet:mt-10 tablet:row-start-2 tablet:col-start-1 tablet:col-span-1 tablet:w-[463px] tablet:justify-self-start w-[calc(100vw-40px)] justify-self-center mt-4 ">
          <OffersSwiper set={handleSet} />
        </div>
        {Call(offer, call)}
        <div className="h-[144px] flex desktop:static desktop:row-start-3 tablet:absolute tablet:mt-0 self-end desktop:col-start-2  justify-self-end  desktop:w-[293px] z-10 tablet:w-[221px] tablet:row-start-4 tablet:col-start-2">
          <p className="self-end desktop:text-lg desktop:leading-normal text-white text-sm font-extralight leading-tight tablet:text-justify tablet:text-[13px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
