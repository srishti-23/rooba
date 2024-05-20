import React from "react";
import img1 from "../assets/asset1.jpg";
import img2 from "../assets/asset2.jpg";
import { LuMapPin, LuAlarmClock } from "react-icons/lu";
import "./landing.css";

const Sidepanel = () => {
  return (
    <>
      <div className="bg-gray-900 ">
        <div className="text-white mt-10 text-2xl font-bold ml-10 tracking-wide">
          <h1>Explore Your First </h1>
          <h1>Event</h1>

          <h2 className="mt-20 text-5xl  tracking-wider">Event Name</h2>
          <p className="text-2xl my-4 flex font-normal tracking-wide ">
            {" "}
            <LuMapPin size={30} /> &nbsp; Venue &nbsp;{" "}
            <LuAlarmClock size={30} /> &nbsp;04/3/2024 @19:00
          </p>
          <h4 className="text-white text-lg pr-3 font-normal my-2">
            Lorem ipsum dolor sit amet <br></br> consectetur. Ac lorem massa in
            morbi <br></br> et sed ipsum. Pellentesque mattis condimentum ut
            nulla.
          </h4>

          <div class="artist-lineup">
            <h3>Artist Lineup</h3>
            <div className="flex flex-row mt-10">
              <img class="im1" src={img2} alt="Artist 1"></img>
              <img class="im2" src={img1} alt="Artist 2"></img>
              <img class="im3" src={img2} alt="Artist 3"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidepanel;
