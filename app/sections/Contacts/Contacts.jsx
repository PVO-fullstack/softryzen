import React from "react";
import { ContactsForm } from "../../component/ContactsForm/ContactsForm";
import style from "./Contacts.module.css";
import Link from "next/link";

export const Contacts = ({ Component, pageProps }) => {
  return (
    <section id="contacts" className={style.bg}>
      <div className=" relative px-5 py-14 grid tablet:px-8 tablet:py-16 tablet:auto-cols-auto tablet:auto-rows-auto desktop:p-[104px]">
        <div className="desktop:auto-rows-min desktop:grid">
          <h2 className="desktop:mb-[71px] desktop:text-[98px] tablet:text-[67px] tablet:leading-[66px] text-white text-[40px] font-thin uppercase leading-[56px]">
            CONTACT <span className="font-medium">US</span>
          </h2>
          <div className="desktop:auto-rows-min desktop:ml-[55px] desktop:col-start-1 relative tablet:auto-cols-min tablet:grid tablet:gap-x-[90px] tablet:auto-rows-auto">
            <div className="desktop:mt-0 tablet:justify-start flex gap-5 justify-end items-baseline mt-9">
              <ul className="tablet:w-[222px]">
                <li>
                  <p className="desktop:text-lg tablet:text-base text-right text-white text-sm font-normal leading-normal">
                    +38 (098) 12 34 567
                  </p>
                </li>
                <li>
                  <p className="desktop:text-lg tablet:text-base text-right text-white text-sm font-normal leading-normal">
                    +38 (073) 12 34 567
                  </p>
                </li>
              </ul>
              <p className=" w-[81px] text-white text-xs font-extralight leading-tight">
                Phone number
              </p>
            </div>
            <div className="desktop:mt-16 tablet:justify-start  flex gap-5 justify-end items-baseline mt-6">
              <p className=" desktop:text-lg tablet:w-[222px] text-right text-white text-sm font-normal leading-normal">
                support@carptravel.com
              </p>
              <p className="w-[81px] text-white text-xs font-extralight leading-tight">
                E-mail
              </p>
            </div>
            <div className="desktop:mt-[124px] desktop:flex-row-reverse desktop:col-start-1 desktop:row-start-3 tablet:mt-9 tablet:justify-start tablet:row-span-2 tablet:col-start-2 tablet:row-start-1 relative flex gap-5 justify-end items-baseline mt-[26px]">
              <p className="desktop:text-start desktop:w-[81px] tablet:w-[52px] text-right text-white text-xs font-extralight leading-tight">
                Follow us
              </p>
              <ul className=" desktop:text-end desktop:w-[222px]  w-[81px] relative z-10">
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={style.link}
                  >
                    facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={style.link}
                  >
                    instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={style.link}
                  >
                    youtube
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={style.link}
                  >
                    tiktok
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="desktop:col-start-2">
            <ContactsForm />
          </div>
        </div>
      </div>
    </section>
  );
};
