"use client";
import React, { useState } from "react";
import { Links } from "../Links/Links";
import { Menu } from "../Menu/Menu";

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
      <button
        onClick={handleMenuClick}
        className="text-white text-sm font-normal z-30 tracking-wider tablet:hidden"
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <div className="mobile:hidden tablet:block z-10">
        <Links />
      </div>
      {isOpen && <Menu close={handleCloseMenu} />}
    </>
  );
};
