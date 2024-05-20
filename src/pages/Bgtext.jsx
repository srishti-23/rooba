import React from "react";
import CarouselComponent from "./CarouselComponent";


const Bgtext = () => {
  return (
    <>
    <div className="block relative ">
      <h1 className="text-slate-400 mt-40 font-bold text-9xl tracking-wider ml-[-160px]">
        ASTR
      </h1>
      <h1 className="text-slate-400 font-bold text-9xl tracking-wider ml-[-160px]" >
        IX
      </h1>
      <h1 className="text-slate-400 mt-16 font-bold text-9xl tracking-wider ml-[-160px]">
        EVE
      </h1>
      <h1 className="text-slate-400  font-bold text-9xl tracking-wider ml-[-160px]">
      NTS
      </h1>
      <CarouselComponent/>
      
    </div>
    </>
    
    
  );
};

export default Bgtext;
