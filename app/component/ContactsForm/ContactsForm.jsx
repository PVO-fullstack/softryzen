"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import x from "../../../public/images/x.svg";
import Image from "next/image";

const fullNameRegexp = /^[a-zA-Z]+ [a-zA-Z]+$/;
const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(fullNameRegexp, { message: "Incorrect name" })
      .required(),
    email: yup
      .string()
      .matches(emailRegexp, { message: "Invalid email" })
      .required("Email required"),
  })
  .required();

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative desktop:justify-items-end desktop:mt-0 tablet:mt-8 mt-3 grid auto-cols-auto auto-rows-auto"
      name="Carrer form"
    >
      <div className="desktop:gap-x-5  desktop:auto-cols-min grid tablet:auto-rows-min tablet:gap-y-[28px] gap-y-4">
        <label
          className={
            errors.fullName
              ? " block text-rose-600 text-xs font-extralight leading-normal tracking-widest"
              : "block  text-white text-xs font-extralight leading-normal tracking-widest"
          }
        >
          Full name
          <input
            {...register("fullName")}
            className="relative z-10 block desktop:w-[293px] desktop:h-7 placeholder:opacity-20 pl-2 text-[13px] text-justify text-white  desktop:text-xl font-extralight leading-normal mt-1 tablet:w-[222px] w-[280px] h-6 bg-white bg-opacity-5"
            placeholder="John Smith"
          />
          <p className=" flex gap-1 justify-end text-right text-rose-500 text-xs font-extralight leading-normal tracking-widest">
            {errors.fullName && <Image src={x} alt="x" />}
            {errors.fullName?.message}
          </p>
        </label>
        <label
          className={
            errors.email
              ? " block  text-rose-600 text-xs font-extralight leading-normal tracking-widest desktop:col-start-2"
              : "block  text-white text-xs font-extralight leading-normal tracking-widest desktop:col-start-2"
          }
        >
          E-mail
          <input
            {...register("email")}
            className="relative z-10 block desktop:w-[294px] desktop:h-7 placeholder:opacity-20 pl-2 text-[13px] text-justify text-white desktop:text-xl font-extralight leading-normal mt-1 tablet:w-[222px] w-[280px] h-6 bg-white bg-opacity-5"
            placeholder="johnsmith@email.com"
          />
          {errors.email && (
            <p className=" flex gap-1 justify-end text-right text-rose-500 text-xs font-extralight leading-normal tracking-widest">
              <Image src={x} alt="x" />
              {errors.email?.message}
            </p>
          )}
        </label>
      </div>
      <div className=" desktop:mt-[42px] desktop:ml-0 desktop:col-start-1 relative z-10 tablet:col-start-2 tablet:ml-5 ">
        <label className="block text-white text-xs font-extralight leading-normal tracking-widest">
          Message
          <textarea
            className="block desktop:w-[607px] desktop:h-[174px] tablet:w-[463px] tablet:h-[221px] mt-1 pl-2 w-[279px] h-[196px] bg-white bg-opacity-5 resize-none"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </label>
      </div>
      <button
        className="desktop:col-start-1 relative z-10 desktop:text-[32px] desktop:mt-6 tablet:col-start-2 tablet:justify-self-end mt-4 block ml-auto text-center text-white text-3xl font-medium"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
