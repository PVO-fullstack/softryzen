"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const schema = yup
  .object({
    fullName: yup.string().required(),
    email: yup
      .string()
      .matches(emailRegexp, { message: "Invalid email address" })
      .required("Email required"),
  })
  .required();

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-[20px] mt-[5px]">
        <div>
          <label className=" w-[294px] block text-white text-xs font-extralight leading-normal tracking-widest">
            Full name
            <input
              className="w-[294px] mt-[6px] h-7 bg-white bg-opacity-5"
              {...register("fullName")}
            />
          </label>
          <p>{errors.fullName?.message}</p>
        </div>

        <div>
          <label className=" w-[293px] block text-white text-xs font-extralight leading-normal tracking-widest">
            E-mail
            <input
              className="w-[293px] mt-[6px] h-7 bg-white bg-opacity-5"
              {...register("eMail")}
            />
          </label>
          <p>{errors.eMail?.message}</p>
        </div>
      </div>

      <label className=" flex flex-col mt-[42px] text-white text-xs font-extralight leading-normal tracking-widest">
        Message
        <textarea className="w-[607px] h-[174px] mt-[4px] bg-zinc-300 bg-opacity-5 resize-none" />
      </label>

      <button
        className=" block ml-[auto] mt-[24px] text-center text-white text-[32px] font-medium"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
