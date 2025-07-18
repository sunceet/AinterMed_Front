import React from "react";

const partners = [
  {
    src: "/assets/svg/it_park_ykt.png",
  },
  {
    src: "/assets/svg/Oreh.png",
  },
  {
    src: "/assets/svg/logo-svfu.png",
  },
  {
    src: "/assets/svg/СТАН.png",
  },
];

const PartnersBlock = () => (
  <div className="w-full flex justify-center px-4 py-10">
    <div className="grid grid-cols-4 gap-4 w-full max-w-4xl items-center">
      {partners.map((partner, idx) => (
        <div key={idx} className="flex justify-center items-center w-full">
          <a target="_blank" rel="noopener noreferrer">
            <img
              src={partner.src}
              className="w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] object-contain"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              style={{ pointerEvents: "auto" }}
            />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default PartnersBlock;
