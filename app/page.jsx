import Image from "next/image";

import "./globals.css";
import { Home } from "./component/Home/Home/Home";
import { About } from "./component/About/About";
import { Services } from "./component/Services/Services";
import { Carrer } from "./component/Carrer/Carrer/Carrer";
import { Gallery } from "./component/Gallery/Gallery/Gallery";
import { Contacts } from "./component/Contacts/Contacts/Contacts";

export default function page({ Component, pageProps }) {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Carrer />
      <Gallery />
      <Contacts />
    </div>
  );
}
