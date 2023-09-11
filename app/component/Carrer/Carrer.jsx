import React from "react";

export const Carrer = ({ Component, pageProps }) => {
  return (
    <div className="bg-[url('/images/bg_carrer.jpg')] bg-cover bg-[#D9D9D9]">
      <div className="pt-[104px] mx-[80px] px-[24px] flex flex-col">
        <div className="flex flex-row">
          <h1 id="carrer" className="title">
            CHOOSE US
          </h1>
          <p>
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
        </div>
        <div>
          <p>Why us ?</p>
          <div>
            <p>Professional development</p>
            <p>
              We offer growth opportunities and a creative environment to
              nurture your talents.
            </p>
          </div>
          <div>
            <p>Teamwork</p>
            <p>
              Join our close-knit family, where support and inspiration abound.
            </p>
          </div>
          <div>
            <p>Stimulating work environment</p>
            <p>Flexibility and remote options for a comfortable experience.</p>
          </div>
          <div>
            <p>Exciting challenges</p>
            <p>
              Unleash your potential through unforgettable projects showcasing
              Carpathian beauty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
