import Image from "next/image";
import { Header } from "./Header";
import { Join } from "./Join";

export const Home = ({ Component, pageProps }) => {
  return (
    <div className=" bg-[#D9D9D9] bg-[url('/images/bg.jpg')] bg-cover  bg-[#020F0880] ">
      <Header />
      <div className=" w-[1280px] mx-[80px] p-[24px] flex flex-row  gap-[292px]">
        <div className="flex flex-col gap-[148px] mb-[104px] ">
          <h1 className="title">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
          <p className="text-white font-extralight text-base">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div>
          <div>
            <p className="text-[98px] text-white font-thin leading-tight ">
              <span className="font-medium">7</span> DAYS
            </p>
            <p className="text-white font-light tracking-[36.48px] text-base text-center">
              JOURNEY
            </p>
          </div>
          <p className=" description mt-[181px]">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <div className="bg-[#FFFFFF0D] border-dashed border border-white divide-x-8 mt-[28px]">
            <Join />
          </div>
        </div>
      </div>
    </div>
  );
};
