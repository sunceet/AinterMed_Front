import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "../src/components/Hero/Main";

export default function App() {
  return (
    <>
      {/* Всегда видимый Header */}
      <Header />

      {/* Основной контент ниже хедера */}
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
    </>
  );
}
