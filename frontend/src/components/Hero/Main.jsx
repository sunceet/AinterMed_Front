"use client";

import dynamic from "next/dynamic";

import VideoBg from "./VideoDesktop";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import CtaButton from "./ButtonTry";
import PromptInput from "./PromtInput";

// Lazy-load
const AiBlock = dynamic(() => import("./AiBlock"), { ssr: false });
const AbouteUsBlock = dynamic(() => import("./AboutUsBlock"), { ssr: false });
const Footer = dynamic(() => import("../Footer/Footer"), { ssr: false });
const FaqBlock = dynamic(() => import("./FaqBlock"), { ssr: false });
const PricingCards = dynamic(() => import("./PricingCards"), { ssr: false });
const ChatPreviewCarousel = dynamic(() => import("./ExampleChat/ChatPreviewCarousel"), { ssr: false });

const Main = () => (
  <section className="relative w-full bg-white text-center overflow-hidden">
    <VideoBg />

    <div className="relative z-10 pt-[40px]">
      <Heading />
      
      <SubHeading />

      <div className="mt-5 mb-12 flex justify-center">
        <CtaButton />
      </div>

      <div className="mt-[480px] mb-[60px] flex justify-center">
        <PromptInput />
      </div>

      {/* Lazy-блоки ниже */}
      <div className="mt-[-50px]">
        <AiBlock />
      </div>

      <ChatPreviewCarousel />

      <AbouteUsBlock />

      <div className="w-full mt-20 bg-[#F2F2F2]">
        <PricingCards />
        <FaqBlock />
        <Footer />
      </div>


    </div>
  </section>
);

export default Main;
