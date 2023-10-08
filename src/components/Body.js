import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

const Body = () => {
  return  VideoCard.length === 0 ? (
      < Shimmer/>
  ) : (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
