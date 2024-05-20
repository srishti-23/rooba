
import React from 'react';
import './slider.css';
import { BsAsterisk } from "react-icons/bs";

const Eventbanner = () => {
  return (
    <>
      <div className="left-panel ml-[420px] z-10">
        <div className="sidebar">
          <div className="sidebar-content ">
            Event: Oasis Bus tour, JLN stadium
            <BsAsterisk className='inline-block mx-2'/> 
            ,Delhi, Collection
          </div>
        </div>
      </div>
    </>
  )
}

export default Eventbanner;