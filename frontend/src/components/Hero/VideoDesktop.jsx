"use client";

const VideoBg = () => (
  <video
    className="pointer-events-none absolute top-[300px] xl:top-[480px] left-1/2
               -translate-x-1/2 -translate-y-1/2 w-[2620px] h-[1320px]
               object-contain rounded-lg z-0"
    src="/assets/video/main_video.mp4"
    autoPlay
    muted
    playsInline
    controls={false}
    onContextMenu={(e) => e.preventDefault()}
    disablePictureInPicture
    controlsList="nodownload nofullscreen noremoteplayback"
  />
);

export default VideoBg;
