import React from "react";
import style from "./About.module.css";

export const About = ({ Component, pageProps }) => {
  return (
    <section id="about" className={style.bg}>
      <div className=" px-5 py-14 grid tablet:px-8 tablet:py-16 tablet:auto-cols-auto tablet:auto-rows-auto desktop:p-[104px]">
        <div className=" z-10 tablet:col-span-2 desktop:col-span-1 desktop:w-[606px]">
          <h2 className="text-white text-[40px] font-thin uppercase leading-[56px] tablet:text-[67px] tablet:leading-none desktop:text-[98px]">
            WHO <span className="font-medium">WE ARE</span>
          </h2>
        </div>
        <div className=" z-10 w-[180px] mt-2 tablet:mt-0 tablet:w-[220px] tablet:row-span-2 desktop:w-[292px] desktop:ml-6">
          <p className="text-white text-sm font-extralight leading-tight tablet:text-base tablet:row-start-1 tablet:row-end-3 desktop:text-lg">
            <span className="font-normal">a team of enthusiasts</span> who are
            fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
          <p className=" mt-5 tablet:mt-4 text-white text-sm font-extralight leading-tight tablet:text-base desktop:text-lg">
            <span className="font-normal">We believe</span> that nature has the
            power to inspire, strengthen character and provide new perspectives.
            Therefore, each of our tours is aimed at unlocking your potential,
            enriching your spiritual world and creating unforgettable memories.
          </p>
        </div>
        <div className=" z-10 mt-10 tablet:mt-0 tablet:self-end tablet:justify-self-start w-[180px] justify-self-end tablet:w-[221px] desktop:w-[296px] tablet:col-start-1 desktop:order-4 desktop:col-start-3 desktop:justify-self-end ">
          <p className="text-white text-sm font-normal uppercase leading-tight tablet:text-base desktop:text-lg desktop:leading-normal">
            From vacationers
          </p>
          <p className="text-right text-white text-sm font-normal uppercase leading-tight tablet:text-base desktop:text-lg desktop:leading-normal">
            to active travelers
          </p>
          <p className="text-white text-sm font-extralight leading-tight tablet:text-base tracking-tight desktop:text-lg desktop:leading-normal desktop:tracking-widest">
            we have a tour for everyone.
          </p>
        </div>
        <div className=" z-10 tablet:col-span-2 tablet:col-start-2 tablet:ml-5 desktop:col-start-1 desktop:w-[605px] desktop:mt-[72px] desktop:ml-0">
          <p className="  mt-10 text-white text-sm font-extralight leading-tight tablet:text-base desktop:text-lg desktop:leading-normal desktop:mt-0">
            <span className="font-normal">We use methods</span> that are
            time-tested and proven. Our expert guides with in-depth knowledge of
            the Carpathian landscapes lead you safely through the mysteries of
            these mountains.
          </p>
        </div>
      </div>
    </section>
  );
};
