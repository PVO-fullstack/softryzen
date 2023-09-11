"use client";
import React, { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const Join = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
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
        className="py-[16px] px-[64px] text-[32px] font-bold  text-white cursor-pointer"
        to="contacts"
        smooth={true}
        duration={1000}
      >
        JOIN NOW
      </Link>
    </>
  );
};
