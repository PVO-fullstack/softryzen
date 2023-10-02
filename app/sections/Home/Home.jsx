import Image from "next/image";
import { Header } from "../../component/Header/Header";
import { Join } from "../../component/Join/Join";
import style from "./Home.module.css";

export const Home = ({ Component, pageProps }) => {
  return (
    <div className={style.bg}>
      <Header />
      <section className="desktop:px-[104px] desktop:pb-[104px] tablet:auto-cols-min tablet:justify-between tablet:px-8 tablet:pb-16 tablet:gap-y-0 relative z-10 px-5 pb-14 grid gap-y-6">
        <div className="tablet:grid tablet:justify-end">
          <p className="text-white text-right text-[37px] font-medium tablet:text-[67px] leading-none desktop:text-[98px]">
            7
            <span className="font-thin tracking-widest tablet:tracking-[8.71px] desktop:tracking-normal ">
              DAYS
            </span>
          </p>
          <p className="text-right text-white text-xs font-light tracking-[9.48px] tablet:w-[221px] tablet:text-sm tablet:tracking-[25.90px] desktop:tracking-[36.48px] desktop:w-[295px] desktop:text-base">
            JOURNEY
          </p>
        </div>
        <div className="tablet:order-first tablet:col-start-1 tablet:col-end-3 tablet:row-start-1 tablet:row-end-3 tablet:w-[426px]">
          <h1 className="tablet:text-[67px] tablet:tracking-[-2.68px] leading-[56px] text-white text-[40px] font-thin uppercase tablet:leading-tight desktop:text-[98px] ">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
        </div>
        <div className="tablet:order-2 tablet:col-span-2 tablet:self-end desktop:mt-[148px]">
          <p className="w-[157px] text-white text-[10px] font-extralight leading-none tablet:w-[262px] tablet:text-sm tablet:tracking-wider desktop:text-base desktop:leading-normal desktop:w-[608px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="tablet:order-3 tablet:row-start-2 tablet:row-end-4 tablet:self-end tablet:justify-self-end ">
          <p className=" text-justify text-white text-sm font-extralight leading-tight tablet:w-[230px] tablet:text-base tablet:mt-14 desktop:w-[294px] desktop:text-lg desktop:leading-normal ">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <div className=" mt-6 relative desktop:mt-7 ">
            <Join />
          </div>
        </div>
      </section>
    </div>
  );
};
