import React from "react";
import { Slider } from "../../component/Slider/Slider";
import style from "./Gallery.module.css";

export const Gallery = ({ Component, pageProps }) => {
  return (
    <section id="gallery" className={style.bg}>
      <div className={style.overlay}>
        <div className="pt-[104px] mx-[80px] px-[24px] flex flex-row justify-center ">
          <div>
            <h1 className="title mb-[126px] z-10 ">
              OUR <span className="font-medium">GALLERY</span>
            </h1>
            <div className="relative">
              <Slider />
            </div>
          </div>
        </div>
        <div className={style.top_overlay}></div>
        <div className={style.bottom_overlay}></div>
      </div>
    </section>
  );
};
