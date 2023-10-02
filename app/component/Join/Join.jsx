"use client";
import React, { useEffect } from "react";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import style from "./Join.module.css";

export const Join = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      // console.log("end", arguments);
    });

    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <Link
        href="/"
        className={style.border}
        to="contacts"
        smooth={true}
        duration={1000}
      >
        JOIN NOW
      </Link>
    </>
  );
};
