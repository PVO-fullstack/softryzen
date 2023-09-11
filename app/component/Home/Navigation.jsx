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

export const Navigation = () => {
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
    <nav className="flex gap-x-[56px]">
      <Link
        className="text-sm text-white cursor-pointer"
        to="about"
        smooth={true}
        duration={1000}
      >
        About
      </Link>
      <Link
        className="text-sm text-white cursor-pointer"
        to="services"
        smooth={true}
        duration={1000}
      >
        Services
      </Link>
      <Link
        className="text-sm text-white cursor-pointer"
        to="carrer"
        smooth={true}
        duration={1000}
      >
        Career
      </Link>
      <Link
        className="text-sm text-white cursor-pointer"
        to="gallery"
        smooth={true}
        duration={1000}
      >
        Gallery
      </Link>
      <Link
        className="text-sm text-white cursor-pointer"
        to="contacts"
        smooth={true}
        duration={1000}
      >
        Contacts
      </Link>
    </nav>
  );
};
