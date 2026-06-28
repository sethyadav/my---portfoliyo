"use client"

import TextReveal from "@/components/TextReveal";
import { useRef } from "react";

export default function Home() {
  const triggerRef = useRef(null);

  const handleHoverEnter = () => {
    triggerRef.current?.play();

  };

  const handleHoverLeave = () => {
    triggerRef.current?.reverse();
  }


  return (
    <main className="h-[300vh] bg-[#010101] w-full">
      <div
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          className="h-[7rem] w-[12rem] bg-red-500 ">

        </div>
       <TextReveal
           ref={triggerRef}
           splitBy="chars"
           trigger='scroll'
           className= "text-[6rem] text-white" >
             Hello Everyone
        </TextReveal>
    </main>
  )
}