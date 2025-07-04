import { useRef, useEffect } from "react";
import MainVideo from "../../assets/video/main_video.mp4";
import MobileVideo from "../../assets/video/mobile_video.mp4";

const VideoDesktop = ({ onLoaded, isMobile }) => {
  const mobileRef = useRef(null);
  const desktopRef = useRef(null);

  // Автостарт видео на мобильных
  useEffect(() => {
    if (isMobile && mobileRef.current) {
      mobileRef.current.play().catch(() => {});
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
    }
  }, [isMobile]);

  useEffect(() => {
    const ref = isMobile ? mobileRef.current : desktopRef.current;
    if (!ref) return;
    const handler = () => onLoaded && onLoaded();
    ref.addEventListener("loadeddata", handler);
    return () => ref.removeEventListener("loadeddata", handler);
  }, [isMobile, onLoaded]);

  return (
    <>
      <video
        ref={desktopRef}
        className="hidden lg:block pointer-events-none absolute top-[300px] xl:top-[480px] left-1/2
                 -translate-x-1/2 -translate-y-1/2 pt-2 w-[2620px] h-[1320px]
                 object-contain rounded-lg z-0"
        src={MainVideo}
        autoPlay
        muted
        playsInline
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      />
      <video
        ref={mobileRef}
        className="block lg:hidden pointer-events-none absolute top-[360px] sm:top-[420px] md:top-[440px] left-1/2
                 -translate-x-1/2 -translate-y-1/2 pt-2 w-[420px] h-[800px]
                 object-contain rounded-lg z-0 scale-[1.05]"
        src={MobileVideo}
        autoPlay
        muted
        playsInline
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      />
    </>
  );
};

export default VideoDesktop;
