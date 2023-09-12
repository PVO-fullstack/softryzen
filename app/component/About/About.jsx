import React from "react";
import style from "./About.module.css";

export const About = ({ Component, pageProps }) => {
  return (
    <div id="about" className={style.bg}>
      <div className={style.overlay}>
        <div className="pt-[104px] mx-[80px] px-[24px] flex flex-row ">
          <div>
            <h1 className="title">
              WHO <span className="font-medium">WE ARE</span>
            </h1>
            <p className="description mt-[424px] mb-[104px] w-[605px]">
              <span className="font-normal">We use methods</span> that are
              time-tested and proven. Our expert guides with in-depth knowledge
              of the Carpathian landscapes lead you safely through the mysteries
              of these mountains.
            </p>
          </div>
          <div className="ml-[24px] mt-[16px] w-[292px]">
            <p className="description">
              <span className="font-normal">a team of enthusiasts</span> who are
              fully committed to the mission of creating unforgettable and
              extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </p>
            <p className="description mt-[24px]">
              <span className="font-normal">We believe</span> that nature has
              the power to inspire, strengthen character and provide new
              perspectives. Therefore, each of our tours is aimed at unlocking
              your potential, enriching your spiritual world and creating
              unforgettable memories.
            </p>
          </div>
          <div className="flex flex-col justify-end w-[296px] mb-[104px]">
            <p className="description uppercase">From vacationers</p>
            <p className="description uppercase text-end">
              to active travelers
            </p>
            <p className="description tracking-[2.16px]">
              we have a tour for everyone.
            </p>
          </div>
        </div>
        <div className={style.top_overlay}></div>
        <div className={style.bottom_overlay}></div>
      </div>
    </div>
  );
};
