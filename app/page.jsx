import "../app/styles/globals.css";
import { Home } from "./sections/Home/Home";
import { About } from "./sections/About/About";
import { Services } from "./sections/Services/Services";
import { Carrer } from "./sections/Carrer/Carrer";
import { Gallery } from "./sections/Gallery/Gallery";
import { Contacts } from "./sections/Contacts/Contacts";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "UNCOVER CARPATHIAN’S SECRETS",
  openGraph: {
    title: "UNCOVER CARPATHIAN’S SECRETS",
    description: "The mysteries of these mountains",
    url: "https://softryzen-tau.vercel.app",
    siteName: "CARPATHIAN’S",
    images: [
      {
        url: "https://softryzen-tau.vercel.app/_next/image?url=%2Fimages%2Fforest.jpg&w=750&q=75",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Home />
      <About />
      <Services />
      <Carrer />
      <Gallery />
      <Contacts />
    </main>
  );
}
