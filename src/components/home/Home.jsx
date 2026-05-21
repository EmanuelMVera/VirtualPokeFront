import React from "react";
import AsideSection from "./asideSection/AsideSection";
import ViewSection from "./viewSection/ViewSection";
import NavBar from "../globalComponent/navBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <NavBar currentPath="home" />
      <AsideSection />
      <ViewSection />
    </div>
  );
}
