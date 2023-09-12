import Image from "next/image";
import React from "react";
import style from "./Services.module.css";

export const Services = ({ Component, pageProps }) => {
  return (
    <div className={style.bg}>
      <div className={style.overlay}>
        <div className="pt-[104px] mx-[80px] px-[24px] flex flex-row ">
          <div className="mb-[80px]">
            <h1 id="services" className="title">
              WE <span className="font-medium">OFFER</span>
            </h1>
            <Image
              src="/images/quadro.jpg"
              width={710}
              height={492}
              alt="quadro"
            />
          </div>
          <div className="ml-[13px] w-[236px]">
            <p className="title">
              01/<span className="text-[#FFFFFF33]">05</span>{" "}
            </p>
            <p className="description_relax list-item">ATVs Traveling</p>
            <p className="description_relax">Rock climbing</p>
            <p className="description_relax">Hot air ballooning</p>
            <p className="description_relax">Skydiving</p>
            <p className="description_relax">Rafting</p>
          </div>
          <div className="w-[293px] ml-[60px]">
            <p className="mt-[135px] text-[12px] text-white font-extralight leading-[2] tracking-[2.4px]">
              Feel the adrenaline rush
            </p>
            <p className="description mt-[244px]">
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
