import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { slides } from "@/app/js/slides";
import { Controll } from "./Controll";
import Image from "next/image";
import "swiper/css";

export const OffersSwiper = ({ set }) => {
  return (
    <div className="tablet:w-[calc(100vw-64px)] desktop:w-[871px]">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        className=""
        slidesPerView={1}
      >
        {slides.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" tablet:w-[463px] desktop:w-[608px] "
          >
            <Image
              className=" desktop:w-[608px] desktop:h-[434px] tablet:w-[463px] tablet:h-[369px] tablet:object-cover tablet:overflow-hidden "
              src={item.img}
              width={608}
              height={434}
              alt={item.alt}
            />
          </SwiperSlide>
        ))}
        <Controll setOffer={set} />
      </Swiper>
    </div>
  );
};
