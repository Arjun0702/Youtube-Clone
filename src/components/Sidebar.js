import React, { useState } from "react";
import { SideBarItems } from "../static/data";
import "../App.css";

const Sidebar = () => {
    const[active,setActive]=useState("Home")
  return (
    <div className="yt-scrollbar  w-60 h-[calc(100vh-53px)] bg-yt-black mt-14 fixed top-0 left-0 p-3  text-yt-white">
      <div className="mb-4">
        {SideBarItems.Top.map((item, index) => {
          return (
            <div
              key={index}
              className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black 
                           ${
                             item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                           }`}
                           onClick={()=>setActive(item.name)}>
                            <span className="mr-4">{item.icon}</span>
                            <p className="p-2 text-sm font-medium">{item.name}</p>
                           </div>
          );
        })}
      </div>
      <hr className="text-yt-light-black my-2"/>
      <div className="mb-4">
        {SideBarItems.Middle.map((item, index) => {
          return (
            <div
              key={index}
              className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black 
                           ${
                             item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                           }`}
                           onClick={()=>setActive(item.name)}>
                            <span className="mr-4">{item.icon}</span>
                            <p className="p-2 text-sm font-medium">{item.name}</p>
                           </div>
          );
        })}
      </div>
      <hr className="text-yt-light-black my-2"/>
      <div className="mb-4">
        {SideBarItems.Explore.map((item, index) => {
          return (
            <div
              key={index}
              className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black 
                           ${
                             item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                           }`}
                           onClick={()=>setActive(item.name)}>
                            <span className="mr-4">{item.icon}</span>
                            <p className="p-2 text-sm font-medium">{item.name}</p>
                           </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
