"use client";
import { useRef, useEffect } from "react";

const VideoBg = () => {
  const mobileRef = useRef(null);

  // Автостарт для мобильных — максимально гарантированно
  useEffect(() => {
    if (mobileRef.current) {
      mobileRef.current.play().catch(() => {});
    }

    const tryPlay = () => {
      if (mobileRef.current && mobileRef.current.paused) {
        mobileRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("touchstart", tryPlay, { passive: true });
    window.addEventListener("click", tryPlay, { passive: true });
    window.addEventListener("scroll", tryPlay, { passive: true });

    return () => {
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("scroll", tryPlay);
    };
  }, []);

  return (
    <>
      {/* Десктопное видео — как было */}
      <video
        className="hidden lg:block pointer-events-none absolute top-[300px] xl:top-[480px] left-1/2
                   -translate-x-1/2 -translate-y-1/2 pt-2 w-[2620px] h-[1320px]
                   object-contain rounded-lg z-0"
        src="/assets/video/main_video.mp4"
        autoPlay
        muted
        playsInline
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback pointer-events-none"
      />

      {/* Мобильное видео — с железным автозапуском */}
      <video
        ref={mobileRef}
        className="block lg:hidden pointer-events-none absolute top-[360px] sm:top-[240px]  md:top-[440px] left-1/2
                   -translate-x-1/2 -translate-y-1/2 pt-2 w-[420px] h-[800px]
                   object-contain rounded-lg z-0 scale-[1.05]"
        src="/assets/video/mobile_video.mp4"
        autoPlay
        muted
        playsInline
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback pointer-events-none"
        poster="/assets/video/mobile_video_poster.jpg"
      />
    </>
  );
};

export default VideoBg;
