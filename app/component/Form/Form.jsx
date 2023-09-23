"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import x from "../../../public/images/x.svg";
import Image from "next/image";

const fullNameRegexp = /^[a-zA-Z]+ [a-zA-Z]+$/;
const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phoneRegexp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

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
    position: yup.string(),
    phone: yup
      .string()
      .matches(phoneRegexp, { message: "Incorrect phone" })
      .required(),
  })
  .required();

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" grid relative z-10 ">
      <h1 className=" desktop:mb-4 desktop:text-lg tablet:w-[221px] desktop:justify-start tablet:text-justify tablet:justify-self-start w-[165px] text-white text-sm font-extralight leading-tight justify-self-end ">
        Don&#39;t miss your opportunity!
        <br />
        Fill out the form right now and join our team!
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" desktop:mt-0 tablet:mt-8 mt-6 grid auto-cols-auto auto-rows-auto"
        name="Carrer form"
      >
        <div className="grid gap-y-4">
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
              className="block desktop:w-[290px] desktop:h-7 placeholder:opacity-20 pl-2 text-[13px] text-justify text-white  desktop:text-xl font-extralight leading-normal mt-1 tablet:w-[222px] w-[280px] h-6 bg-white bg-opacity-5"
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
                ? " block  text-rose-600 text-xs font-extralight leading-normal tracking-widest"
                : "block  text-white text-xs font-extralight leading-normal tracking-widest"
            }
          >
            E-mail
            <input
              {...register("email")}
              className="block desktop:w-[290px] desktop:h-7 placeholder:opacity-20 pl-2 text-[13px] text-justify text-white desktop:text-xl font-extralight leading-normal mt-1 tablet:w-[222px] w-[280px] h-6 bg-white bg-opacity-5"
              placeholder="johnsmith@email.com"
            />
            {errors.email && (
              <p className=" flex gap-1 justify-end text-right text-rose-500 text-xs font-extralight leading-normal tracking-widest">
                <Image src={x} alt="x" />
                {errors.email?.message}
              </p>
            )}
          </label>
          <label
            className={
              errors.position
                ? " block  text-rose-600 text-xs font-extralight leading-normal tracking-widest"
                : "block  text-white text-xs font-extralight leading-normal tracking-widest"
            }
          >
            Position
            <input
              {...register("position")}
              className="block desktop:w-[290px] desktop:h-7 placeholder:opacity-20 pl-2 text-[13px] text-justify text-white desktop:text-xl font-extralight leading-normal mt-1 tablet:w-[222px] w-[280px] h-6 bg-white bg-opacity-5"
              placeholder="Movie maker"
            />
            {errors.position && (
              <p className=" flex gap-1 justify-end text-right text-rose-500 text-xs font-extralight leading-normal tracking-widest">
                <Image src={x} alt="x" />
                {errors.position?.message}
              </p>
            )}
          </label>
          <label
            className={
              errors.phone
                ? " block  text-rose-600 text-xs font-extralight leading-normal tracking-widest"
                : "block  text-white text-xs font-extralight leading-normal tracking-widest"
            }
          >
            Phone
            <div className="relative">
              <input
                {...register("phone")}
                className=" block desktop:w-[290px] desktop:h-7 desktop:pl-14 placeholder:opacity-20 pl-10 text-[13px] text-justify text-white desktop:text-xl font-extralight leading-normal mt-1 tablet:w-[222px] w-[280px] h-6 bg-white bg-opacity-5"
                placeholder="(097) 12 34 567"
              />
              <span className=" desktop:text-xl desktop:top-0 desktop:translate-y-0 pl-2 absolute text-[13px] text-justify text-white top-[2px] left-0 ">
                + 38
              </span>
            </div>
            {errors.phone && (
              <p className=" flex gap-1 justify-end text-right text-rose-500 text-xs font-extralight leading-normal tracking-widest">
                <Image src={x} alt="x" />
                {errors.phone?.message}
              </p>
            )}
          </label>
        </div>
        <div className=" tablet:col-start-2 tablet:ml-5 ">
          <label className="block text-white text-xs font-extralight leading-normal tracking-widest">
            Message
            <textarea
              className="block desktop:w-[292px] desktop:h-[268px] tablet:w-[221px] tablet:h-[228px] mt-1 w-[279px] h-[196px] bg-white bg-opacity-5 resize-none"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </label>
        </div>
        <div className=" mt-4 flex gap-2 items-start">
          <input className="" type="checkbox" name="confirm" id="" />
          <label className="block text-white text-xs font-extralight leading-snug">
            I confirm my consent to the processing of personal data.
          </label>
        </div>
        <button
          className="desktop:text-[32px] desktop:mt-6 mt-4 block ml-auto text-center text-white text-3xl font-medium"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};
