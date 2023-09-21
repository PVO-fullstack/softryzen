import React from "react";
import { ContactsForm } from "../../component/ContactsForm/ContactsForm";
import style from "./Contacts.module.css";

export const Contacts = ({ Component, pageProps }) => {
  return (
    <section id="contacts" className={style.bg}>
      <div className={style.overlay}>
        <div className="bg-neutral-950 bg-opacity-75">
          <div className="pt-[104px] mx-[80px] px-[24px] flex flex-row ">
            <div>
              <h1 className="title">
                CONTACT <span className="font-medium">US</span>
              </h1>
              <div className=" mt-[71px] mb-[104px] flex flex-row gap-[239px]">
                <div className="flex flex-row gap-[20px] ml-[83px] ">
                  <div>
                    <p className="text-right text-white text-lg font-normal leading-normal">
                      +38 (098) 12 34 567
                    </p>
                    <p className="text-right text-white text-lg font-normal leading-normal">
                      +38 (073) 12 34 567
                    </p>
                    <p className=" mt-[64px] text-right text-white text-lg font-normal leading-normal">
                      support@carptravel.com
                    </p>
                    <p className=" mt-[124px] text-right text-white text-lg font-normal leading-normal">
                      facebook
                    </p>
                    <p className="text-right text-white text-lg font-normal leading-normal">
                      instagram
                    </p>
                    <p className="text-right text-white text-lg font-normal leading-normal">
                      youtube
                    </p>
                    <p className="text-right text-white text-lg font-normal leading-normal">
                      tiktok
                    </p>
                  </div>
                  <div>
                    <p className=" mt-[5px] text-white text-xs font-extralight leading-normal">
                      Phone number
                    </p>
                    <p className=" mt-[100px] text-white text-xs font-extralight leading-normal">
                      E-mail
                    </p>
                    <p className=" mt-[130px] text-white text-xs font-extralight leading-normal">
                      Follow us
                    </p>
                  </div>
                </div>
                <ContactsForm />
              </div>
            </div>
          </div>
          <div className={style.top_overlay}></div>
          <div className={style.bottom_overlay}></div>
        </div>
      </div>
    </section>
  );
};
