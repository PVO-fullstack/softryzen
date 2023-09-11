"use client";
import React, { useEffect, useState, createContext } from "react";
import Image from "next/image";

const images = [
  "/images/forest.jpg",
  "/images/lake.jpg",
  "/images/mountain.jpg",
];

export const SliderContext = createContext();

export const Slider = () => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(2);
  const [nextSlide, setNextSlide] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setItems(images);
  }, []);

  const changeSlide = (count) => {
    let slideNumber = 0;

    if (slide + count < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + count) % items.length;
    }
    setSlide(slideNumber);
    prev(slideNumber);
    next(slideNumber);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  const prev = (active) => {
    if (active === 0) {
      setPrevSlide(items.length - 1);
    } else {
      setPrevSlide(active - 1);
    }
  };

  const next = (active) => {
    if (active === items.length - 1) {
      setNextSlide(0);
    } else {
      setNextSlide(active + 1);
    }
  };

  const handleBackClick = () => {
    if (slide === 0) {
      setSlide(items.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const handleNextClick = () => {
    if (slide === items.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [changeSlide]);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="flex flex-row justify-center items-center mt-[15px] mb-[214px] gap-[654px] relative"
    >
      <div className="w-[313px] h-[224px] bg-[#D9D9D9] relative ">
        {items.length ? (
          <Image src={items[prevSlide]} width={366} height={227} alt="photo" />
        ) : null}
        <div className=" w-[313px] h-[225px] absolute top-0 bg-[#020F08BF] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] "></div>
      </div>
      <div className="w-[606px] h-[429px]  z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row ">
        {items.length ? (
          <Image
            className=" w-[606px] h-[429px] bg-[#D9D9D9] "
            src={items[slide]}
            width={669}
            height={447}
            alt="photo"
          />
        ) : null}
      </div>
      <div className="w-[313px] h-[224px] bg-[#D9D9D9] relative ">
        {items.length ? (
          <Image src={items[nextSlide]} width={366} height={227} alt="photo" />
        ) : null}
        <div className=" w-[313px] h-[225px] absolute top-0 bg-[#020F08BF] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] "></div>
      </div>
      <div className="absolute bottom-[-70px] translate-y-[100%] z-10 flex flex-row justify-center gap-[651px] ">
        <button
          onClick={handleBackClick}
          className="w-[294px] h-[40] text-white text-[33px] text-right"
        >
          BACK
        </button>
        <button
          onClick={handleNextClick}
          className="w-[294px] h-[40] text-white text-[33px] text-left"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
