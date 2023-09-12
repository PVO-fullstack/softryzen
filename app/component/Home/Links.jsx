"use client";
import React, { useEffect, useState } from "react";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

export const Links = ({ closeMenu }) => {
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

  const handleCloseManu = () => {
    closeMenu ? closeMenu() : null;
  };

  return (
    <nav className="mobile:flex-col mobile:justify-center items-center mobile:mt-[170px] mobile:gap-12 tablet:gap-6 flex tablet:flex-row tablet:mt-0 desktop:gap-x-[56px] z-10">
      <Link
        onClick={handleCloseManu}
        className="menu_item"
        to="about"
        smooth={true}
        duration={1000}
      >
        About
      </Link>
      <Link
        onClick={handleCloseManu}
        className="menu_item"
        to="services"
        smooth={true}
        duration={1000}
      >
        Services
      </Link>
      <Link
        onClick={handleCloseManu}
        className="menu_item"
        to="carrer"
        smooth={true}
        duration={1000}
      >
        Career
      </Link>
      <Link
        onClick={handleCloseManu}
        className="menu_item"
        to="gallery"
        smooth={true}
        duration={1000}
      >
        Gallery
      </Link>
      <Link
        onClick={handleCloseManu}
        className="menu_item"
        to="contacts"
        smooth={true}
        duration={1000}
      >
        Contacts
      </Link>
    </nav>
  );
};
