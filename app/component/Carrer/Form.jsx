import React from "react";

export const Form = () => {
  return (
    <div>
      <h1 className="text-justify text-white text-lg font-extralight leading-normal">
        Don`&#39`t miss your opportunity! Fill out the form right now and join
        our team!
      </h1>
      <form className="flex flex-row" name="Carrer form">
        <div>
          <label className="block text-white text-xs font-extralight leading-normal tracking-widest">
            Full name
            <input
              className="w-[290px] h-7 bg-white bg-opacity-5"
              type="text"
              name="name"
            />
          </label>
          <label className="block text-white text-xs font-extralight leading-normal tracking-widest">
            E-mail
            <input
              className="w-[290px] h-7 bg-white bg-opacity-5"
              type="email"
              name="email"
            />
          </label>
          <label className="block text-white text-xs font-extralight leading-normal tracking-widest">
            Position
            <input
              className="w-[290px] h-7 bg-white bg-opacity-5"
              type="text"
              name="position"
            />
          </label>
          <label className="block text-white text-xs font-extralight leading-normal tracking-widest">
            Phone
            <input
              className="w-[290px] h-7 bg-white bg-opacity-5"
              type="phone"
              name="phone"
            />
          </label>
          <input className="" type="checkbox" name="confirm" id="" />
        </div>
        <div>
          <label className="block text-white text-xs font-extralight leading-normal tracking-widest">
            Message
            <textarea
              className="w-[292px] h-[268px] bg-white bg-opacity-5 resize-none"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <button
            className="text-center text-white text-[32px] font-medium"
            type="submit"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};
