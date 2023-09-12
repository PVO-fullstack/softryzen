import Image from "next/image";
import { Header } from "../Header";
import { Join } from "../Join/Join";
import style from "./Home.module.css";

export const Home = ({ Component, pageProps }) => {
  return (
    <div className={style.bg}>
      <div className={style.overlay}>
        <div className={style.header_overlay}></div>
        <Header />
        <div className=" mx-5 pb-14 grid gap-6 pt-[25px] tablet:mx-8 tableet:pt-[122px] tablet:grid-row-2 tablet:place-content-between desktop:mx-[80px] desktop:p-[24px] ">
          <div className="tablet:order-2">
            <p className="text-white text-right text-[37px] font-thin tracking-widest tablet:text-[67px] tablet:tracking-[8.71px]">
              <span className="font-medium">7</span>DAYS
            </p>
            <p className="text-right text-white text-xs font-light tracking-[9.48px] tablet:text-sm tablet:tracking-[25.90px] desktop:tracking-[36.48px] desktop:text-base desktop:text-center">
              JOURNEY
            </p>
          </div>
          <div className="tablet:order-first tablet:w-[426px]">
            <h1 className="text-white text-[40px] font-thin uppercase mobile:leading-[56px] tablet:text-[67px] tablet:font-medium ">
              <span className="font-medium">Uncover</span> Carpathian’s Secrets
            </h1>
            <p className="w-[157px] text-white text-[10px] font-extralight leading-none tablet:w-[262px] tablet:text-sm tablet:tracking-wider desktop:text-base">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>
          <div className="">
            <p className=" text-justify text-white text-sm font-extralight leading-tight tablet:w-[230px] tablet:text-base desktop:description ">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <div className=" mt-6 relative ">
              <Join />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
