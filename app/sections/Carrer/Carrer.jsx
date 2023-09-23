import React from "react";
import style from "./Carrer.module.css";
import { Form } from "../../component/Form/Form";

export const Carrer = ({ Component, pageProps }) => {
  return (
    <>
      <section className={style.bg}>
        <div className="relative px-5 py-14 grid tablet:px-8 tablet:py-16 tablet:auto-cols-auto tablet:auto-rows-auto tablet:gap-x-5 desktop:p-[104px]">
          <div className="tablet:col-span-2 ">
            <h1
              id="carrer"
              className="desktop:text-[98px] tablet:text-[67px] text-white text-[40px] font-thin uppercase leading-[56px]"
            >
              CHOOSE <span className="font-medium">US</span>
            </h1>
          </div>
          <div className="desktop:mb-8 tablet:col-start-3 tablet:mt-0 justify-self-end mt-6">
            <p className="desktop:w-[293px] desktop:text-lg desktop:leading-normal tablet:w-[221px] tablet:text-justify tablet:text-[13px]  tablet:leading-tight w-[179px] text-white text-sm font-extralight leading-5 ">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
          </div>
          <div className="desktop:mb-[25px] desktop:mt-0 desktop:justify-self-start desktop:ml-[122px] tablet:mt-3 justify-self-end mt-9">
            <h2 className=" desktop:text-4xl  desktop:leading-[39px] tablet:mb-9 tablet:text-right w-[179px] text-white text-3xl font-extralight uppercase">
              Why us ?
            </h2>
          </div>
          <div className=" desktop:gap-7 desktop:row-span-1 tablet:mt-0 tablet:col-start-1 tablet:row-span-2 mt-9 mr-[99px] tablet:mr-0 grid gap-4">
            <div className="desktop:grid-flow-col  desktop:gap-6 grid gap-2">
              <p className="advantages  desktop:w-[290px] ">
                Professional development
              </p>
              <p className="description_carrer  desktop:w-[285px]">
                We offer growth opportunities and a creative environment to
                nurture your talents.
              </p>
            </div>
            <div className="desktop:grid-flow-col desktop:gap-6 grid gap-2">
              <p className="advantages desktop:w-[290px]">Teamwork</p>
              <p className="description_carrer desktop:w-[285px]">
                Join our close-knit family, where support and inspiration
                abound.
              </p>
            </div>
            <div className="desktop:grid-flow-col desktop:gap-6 grid gap-2">
              <p className="advantages desktop:w-[290px]">
                Stimulating work environment
              </p>
              <p className="description_carrer desktop:w-[285px]">
                Flexibility and remote options for a comfortable experience.
              </p>
            </div>
            <div className="desktop:grid-flow-col desktop:gap-6 grid gap-2">
              <p className="advantages desktop:w-[290px]">
                Exciting challenges
              </p>
              <p className="description_carrer desktop:w-[285px]">
                Unleash your potential through unforgettable projects showcasing
                Carpathian beauty.
              </p>
            </div>
          </div>
          <div className="relative desktop:row-start-2 desktop:row-span-3 tablet:col-start-2 tablet:row-span-2 tablet:col-span-2 tablet:block hidden  ">
            <Form />
          </div>
        </div>
      </section>
      <div className={style.mob_bg}>
        <Form />
      </div>
    </>
  );
};
