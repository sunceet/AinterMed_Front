"use client";

import { useState } from "react";
import { SubscribeProvider } from "./SubscribeContext";
import SubscribeHeader from "./SubscribeHeader";
import DurationSelector from "./DurationSelector";
import PromoInput from "./PromoInput";
import PlanCards from "./PlanCards";
import AuthModal from "../AuthModal/AuthModal";

export default function Subscribe() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleOpenModal = () => setShowAuthModal(true);
  const handleCloseModal = () => setShowAuthModal(false);

  return (
    <SubscribeProvider>
      <main className="bg-[#F2F2F2] min-h-screen flex flex-col py-10 items-center text-black">
        <SubscribeHeader />
        <DurationSelector />
        <PromoInput />
        <PlanCards openModal={handleOpenModal} />
        {showAuthModal && <AuthModal onClose={handleCloseModal} />}
      </main>
    </SubscribeProvider>
  );
}
