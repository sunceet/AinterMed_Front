"use client";

import { SubscribeProvider } from "./SubscribeContext";
import SubscribeHeader from "./SubscribeHeader";
import DurationSelector from "./DurationSelector";
import PromoInput from "./PromoInput";
import PlanCards from "./PlanCards";

export default function Subscribe() {
  return (
    <SubscribeProvider>
      <main className="bg-[#F2F2F2] min-h-screen flex flex-col py-10 px-4 items-center text-black">
        <SubscribeHeader />
        <DurationSelector />
        <PromoInput />
        <PlanCards />
      </main>
    </SubscribeProvider>
  );
}
