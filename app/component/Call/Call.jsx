import React from "react";

export const Call = (call, description) => {
  let callClass =
    "desktop:static desktop:row-start-2 tablet:mt-0  z-10 tablet:w-[221px] tablet:row-start-3 tablet:col-start-2 absolute bottom-[380px] tablet:top-[379px] justify-self-end desktop:w-[293px]";
  if (call === "traveling") {
    callClass += " desktop:mt-[15px]";
  } else if (call === "climbing") {
    callClass += " desktop:mt-[63px]";
  } else if (call === "balloon") {
    callClass += " desktop:mt-[111px]";
  } else if (call === "diving") {
    callClass += " desktop:mt-[183px]";
  } else if (call === "rafting") {
    callClass += " desktop:mt-[231px]";
  }

  return (
    <div className={callClass}>
      <p className="desktop:text-lg desktop:leading-normal text-white text-sm font-extralight leading-tight tablet:text-justify tablet:text-[13px]">
        {description}
      </p>
    </div>
  );
};
