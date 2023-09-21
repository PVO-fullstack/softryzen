import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Links } from "../Links/Links";

export const Menu = ({ close }) => {
  return (
    <div className="absolute top-0 left-0 z-20 w-screen h-[642px] bg-zinc-950 bg-opacity-75 backdrop-blur-[50px]">
      <Links closeMenu={close} />
    </div>
  );
};
