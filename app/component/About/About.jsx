import React from "react";
import style from "./About.module.css";

export const About = ({ Component, pageProps }) => {
  return (
    <div id="about" className={style.bg}>
      <div className={style.overlay}>
        <div className="mx-5 pb-14 grid gap-6 pt-[25px] desktop:pt-[104px] desktop:mx-[80px] desktop:px-[24px]">
          <div>
            <h1 className="text-white text-[40px] font-thin uppercase leading-[56px]">
              WHO <span className="font-medium">WE ARE</span>
            </h1>
          </div>
          <div className=" w-[180px]">
            <p className="text-white text-sm font-extralight leading-tight">
              <span className="font-normal">a team of enthusiasts</span> who are
              fully committed to the mission of creating unforgettable and
              extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </p>
            <p className="text-white text-sm font-extralight leading-tight">
              <span className="font-normal">We believe</span> that nature has
              the power to inspire, strengthen character and provide new
              perspectives. Therefore, each of our tours is aimed at unlocking
              your potential, enriching your spiritual world and creating
              unforgettable memories.
            </p>
          </div>
          <div className=" w-[180px] justify-self-end ">
            <p className="text-white text-sm font-normal uppercase leading-tight">
              From vacationers
            </p>
            <p className="text-right text-white text-sm font-normal uppercase leading-tight">
              to active travelers
            </p>
            <p className="text-white text-sm font-extralight leading-tight">
              we have a tour for everyone.
            </p>
          </div>
          <div>
            <p className="text-white text-sm font-extralight leading-tight">
              <span className="font-normal">We use methods</span> that are
              time-tested and proven. Our expert guides with in-depth knowledge
              of the Carpathian landscapes lead you safely through the mysteries
              of these mountains.
            </p>
          </div>
        </div>
        <div className={style.top_overlay}></div>
        <div className={style.bottom_overlay}></div>
      </div>
    </div>
  );
};
