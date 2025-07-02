"use client";
import { useEffect, useState } from "react";
import Main from "../components/Hero/Main";
import Preloader from "../components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true); // запускаем плавное исчезновение
      setTimeout(() => {
        setLoading(false); // удаляем прелоадер из DOM
      }, 500); // совпадает с duration-500
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading && <Preloader hidden={fadeOut} />}
      <Main />
    </>
  );
}
