import Image from "next/image";
import { Header } from "../../component/Header/Header";
import { Join } from "../../component/Join/Join";
import style from "./Home.module.css";

export const Home = ({ Component, pageProps }) => {
  return (
    <div className={style.bg}>
      <div className={style.header_overlay}></div>
      <Header />
      <div className=" relative mx-5 pb-14 grid gap-6 pt-[25px] tablet:mx-8 tablet:pt-[66px] tablet:grid-cols-3 tablet:grid-rows-2 tablet:gap-0 desktop:mx-[80px] desktop:p-[24px] ">
        <div className="tablet:order-1 tablet:w-[230px] tablet:justify-self-end desktop:w-[293px]">
          <p className="text-white text-right text-[37px] font-thin tracking-widest tablet:text-[67px] tablet:tracking-[8.71px] desktop:text-[98px] desktop:text-start">
            <span className="font-medium">7</span>DAYS
          </p>
          <p className="text-right text-white text-xs font-light tracking-[9.48px] tablet:text-sm tablet:tracking-[25.90px] desktop:tracking-[36.48px] desktop:text-base desktop:text-center">
            JOURNEY
          </p>
        </div>
        <div className="tablet:order-first tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 tablet:row-end-3 tablet:w-[426px]">
          <h1 className="text-white text-[40px] font-thin uppercase mobile:leading-[56px] tablet:text-[67px] tablet:h-[243px] tablet:leading-tight desktop:text-[98px] ">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
        </div>
        <div className="tablet:order-2 tablet:col-span-2 tablet:self-end desktop:mt-[148px] desktop:pb-[104px] ">
          <p className="w-[157px] text-white text-[10px] font-extralight leading-none tablet:w-[262px] tablet:text-sm tablet:tracking-wider desktop:text-base desktop:leading-normal desktop:w-[608px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="tablet:order-3 tablet:row-start-2 tablet:row-end-4 tablet:self-end tablet:justify-self-end ">
          <p className=" text-justify text-white text-sm font-extralight leading-tight tablet:w-[230px] tablet:text-base desktop:w-[294px] desktop:text-lg desktop:leading-normal ">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <div className=" mt-6 relative desktop:mt-7 desktop:pb-[110px] ">
            <Join />
          </div>
        </div>
      </div>
    </div>
  );
};
