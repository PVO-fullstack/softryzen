"use client";
import React, { useEffect, useState, createContext } from "react";
import Image from "next/image";
import style from "./Slider.module.css";

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

  const nextClick = (active) => {
    if (active === items.length - 1) {
      setNextSlide(1);
    } else if (active === items.length - 2) {
      setNextSlide(0);
    } else {
      setNextSlide(active + 2);
    }
  };

  const backClick = (active) => {
    if (active === 0) {
      setPrevSlide(items.length - 2);
    } else if (active === items.length - 1) {
      setPrevSlide(active - 2);
    } else {
      setPrevSlide(items.length - 1);
    }
  };

  const handleBackClick = () => {
    if (slide === 0) {
      setSlide(items.length - 1);
    } else {
      setSlide(slide - 1);
    }
    backClick(slide);
    setNextSlide(slide);
  };

  const handleNextClick = () => {
    if (slide === items.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
    nextClick(slide);
    setPrevSlide(slide);
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
      className="tablet:items-center tablet:justify-items-center tablet:auto-cols-auto relative grid gap-y-6 "
    >
      <div className={style.overlay}>
        {items.length ? (
          <Image
            className=" desktop:w-[313px] desktop:h-[225px] tablet:w-[121px] tablet:h-[87px] w-[280px] h-[187px]"
            src={items[prevSlide]}
            width={313}
            height={225}
            alt="forest"
          />
        ) : null}
      </div>
      <div className=" tablet:row-start-1 tablet:w-[415px] tablet:h-[294px] w-[280px] h-[187px] desktop:w-[606px] desktop:h-[429px] flex flex-row ">
        {items.length ? (
          <Image
            className="tablet:w-[415px] tablet:h-[294px] w-[280px] h-[187px] desktop:w-[606px] desktop:h-[429px] bg-[#D9D9D9] "
            src={items[slide]}
            width={669}
            height={447}
            alt="lake"
          />
        ) : null}
      </div>
      <div className={style.overlay}>
        {items.length ? (
          <Image
            className=" desktop:w-[313px] desktop:h-[225px] tablet:w-[121px] tablet:h-[87px] w-[280px] h-[187px]"
            src={items[nextSlide]}
            width={313}
            height={225}
            alt="mountain"
          />
        ) : null}
      </div>
      <div className=" desktop:bottom-0 desktop:gap-[646px] absolute tablet:gap-x-[435px] tablet:bottom-[17px] z-10 flex flex-row justify-center  ">
        <button
          onClick={handleBackClick}
          className=" cursor-pointer desktop:w-[294px] desktop:text-end  tablet:w-[85px] tablet:h-[40] tablet:block text-right text-white text-[33px] font-thin hidden "
        >
          BACK
        </button>
        <button
          onClick={handleNextClick}
          className=" cursor-pointer desktop:w-[294px] tablet:w-[85px] tablet:h-[40] desktop:text-left tablet:block text-right text-white text-[33px] font-thin hidden "
        >
          NEXT
        </button>
      </div>
    </div>
  );
};
