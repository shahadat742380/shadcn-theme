import { serverClient } from "@/app/_trpc/serverClient";
import React from "react";

const Hero = async() => {
    const data = await serverClient.getUser();


  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        
        <h2 className="text-center font-bold text-3xl md:text-5xl">{data.userName}</h2>
        <p className="text-2xl my-2 font-semibold text-center">{data.role}</p>
        <p className="max-w-[400px] mx-auto text-center mt-5 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Hero;
