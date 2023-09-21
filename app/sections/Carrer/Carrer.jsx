import React from "react";
import style from "./Carrer.module.css";
import { Form } from "../../component/Form/Form";

export const Carrer = ({ Component, pageProps }) => {
  return (
    <section className={style.bg}>
      <div className={style.overlay}>
        <div className="pt-[104px] mx-[80px] px-[24px] flex flex-col">
          <div className="flex flex-row">
            <h1 id="carrer" className="title ml-[103px]">
              CHOOSE <span className="font-medium">US</span>
            </h1>
            <p className="description w-[293px] ml-[400px] text-justify ">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
          </div>
          <div className="flex flex-row mt-[24px]">
            <div>
              <h2 className="text-[36px]  ml-[226px] uppercase text-white font-extralight leading-[1.08]">
                Why us ?
              </h2>
              <div className="flex flex-row ml-[130px] mt-[45px] gap-[24px]">
                <p className="advantages ">Professional development</p>
                <p className="description_carrer ">
                  We offer growth opportunities and a creative environment to
                  nurture your talents.
                </p>
              </div>
              <div className="flex flex-row ml-[130px] mt-[45px] gap-[24px]">
                <p className="advantages">Teamwork</p>
                <p className="description_carrer">
                  Join our close-knit family, where support and inspiration
                  abound.
                </p>
              </div>
              <div className="flex flex-row ml-[130px] mt-[45px] gap-[24px]">
                <p className="advantages">Stimulating work environment</p>
                <p className="description_carrer">
                  Flexibility and remote options for a comfortable experience.
                </p>
              </div>
              <div className="flex flex-row ml-[130px] mt-[45px] mb-[220px] gap-[24px]">
                <p className="advantages">Exciting challenges</p>
                <p className="description_carrer">
                  Unleash your potential through unforgettable projects
                  showcasing Carpathian beauty.
                </p>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
