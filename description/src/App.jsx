import { Button } from "@material-tailwind/react";
import React from 'react'
import { Header } from "./components/Header";
import LeftSideText from "./components/LeftSideText";
import RightSideText from "./components/RightSideText";
import BottomLeft from "./components/BottomLeft";
import Gallery from "./components/Gallery";



function App() {
  return (
    <div className="bg-background w-full h-{1595px} text-white bg-auto">
      <Header />
      <div className="flex justify-between mx-[40px] mt-[100px] mb-[100px]">
        <LeftSideText />
        <RightSideText />
      </div>
      <div className="flex justify-between mr-[20px] items-center">
        <BottomLeft />
        <Gallery />
      </div>
    </div>
  )
}

export default App