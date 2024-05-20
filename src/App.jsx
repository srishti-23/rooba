import React from "react";
import Bgtext from "./pages/Bgtext";
// import CarouselComponent from "./pages/CarouselComponent";
import Sidepanel from "./pages/Sidepanel";
import Eventbanner from "./pages/Eventbanner";


const App = () => {
  return (
    <>
      {" "}
      <div className="bg-gray-900 min-h-screen flex  ">
    
        <h1 className=" text-amber-300	mt-10 ml-8 text-4xl font-extrabold">
           Astrix.
        </h1>
        <Bgtext/>
       
        <Eventbanner/>
        {/* <div className="w-[70%]">
          <div className="w-[40%]">
          <Bgtext />
          </div>
          <div className="w-[30%]">
           <Eventbanner />
          </div> */}
         <Sidepanel/>
        </div>
      
        
      {/* <div className="w-[30%]">
          <Sidepanel />
        </div> */}

        {/* <CarouselComponent/> */}
     
    </>
  );
};

export default App;
