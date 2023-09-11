import React from "react";
import { Slider } from "./Slider/Slider";

export const Gallery = ({ Component, pageProps }) => {
  return (
    <div
      id="gallery"
      className="bg-[url('/images/bg_gallery.jpg')] bg-cover bg-[#0A1813;] relative"
    >
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
      <div className=" w-screen h-[788px] absolute top-0 bg-[#020F08BF] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] "></div>
    </div>
  );
};
