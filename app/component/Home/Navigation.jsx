"use client";
import React, { useState } from "react";
import { Links } from "./Links";
import { Menu } from "./Menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <h2
        onClick={handleMenuClick}
        className="text-white text-sm font-normal z-30 tracking-wider tablet:hidden"
      >
        {isOpen ? "Close" : "Menu"}
      </h2>
      <div className="mobile:hidden tablet:block z-10">
        <Links />
      </div>
      {isOpen && <Menu isOpen && close={handleCloseMenu} />}
    </>
  );
};
