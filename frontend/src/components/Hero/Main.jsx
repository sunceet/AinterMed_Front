"use client";

import VideoDesktop from "./VideoDesktop";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import CtaButton from "./ButtonTry";
import PromptInput from "./PromtInput";
import AiBlock from "./AiBlock";
import AboutUsBlock from "./AboutUsBlock";
import FaqBlock from "./FaqBlock";
import ReviewsGrid from "./ReviewsGrid";
import PricingCards from "./PricingCards";
import ChatPreviewCarousel from "./ExampleChat/ChatPreviewCarousel";
import ModelFeaturesBlock from "./ModelFeaturesBlock";

const Main = () => (
  <section className="relative w-full bg-white text-center overflow-hidden">
    <VideoDesktop />

    <div className="relative z-10 pt-[40px]">
      <Heading />
      <SubHeading />

      <div className="mt-5 mb-12 flex justify-center">
        <CtaButton />
      </div>

      <div className="mt-[300px] xl:mt-[480px] mb-[60px] flex justify-center">
        <PromptInput />
      </div>

      <div className="mt-[-50px]">
        <AiBlock />
      </div>

      <ChatPreviewCarousel />
      <AboutUsBlock />
      <ModelFeaturesBlock />

      <ReviewsGrid />

      <div className="w-full rounded-t-4xl mt-20 bg-[#F2F2F2]">
        <PricingCards />
        <FaqBlock />
      </div>
    </div>
  </section>
);

export default Main;
