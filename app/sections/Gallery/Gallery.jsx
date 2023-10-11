import React from "react";
import { Slider } from "../../component/Slider/Slider";
import style from "./Gallery.module.css";

export const Gallery = ({ Component, pageProps }) => {
  return (
    <section id="gallery" className={style.bg}>
      <div className=" grid relative px-5 py-14 tablet:px-8 tablet:py-16 desktop:py-[104px] desktop:px-20">
        <h2 className="desktop:text-[98px] text-justify tablet:text-[67px] tablet:text-center  text-white text-[40px] font-thin uppercase leading-[56px] mb-6">
          OUR <span className="font-medium">GALLERY</span>
        </h2>
        <div className="relative desktop:mt-6 tablet:mt-[72px]">
          <Slider />
        </div>
      </div>
    </section>
  );
};
