import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="flex flex-col gap-5 pl-7 col-span-1 z-10 py-4">
      <ul className="flex flex-col gap-3 text-slate-700">
        <li className="flex gap-6 items-center">
          <Link className="w-5 h-5  hover:bold-lg" to="/">Home</Link>
        </li>
        <li className="flex gap-6">
          <Link className="w-5 h-5" to="/demo">Demo</Link>
        </li>
        <li  className="flex gap-6"> 
        <Link  className="w-5 h-5" to="/shorts">Shorts</Link>
          </li>
        <li  className="flex gap-6"> 
        <Link  className="w-5 h-5" to="/videos">Videos</Link>
        </li>
        <li  className="flex gap-6"> 
        <Link  className="w-5 h-5" to="/live">Live</Link>
        </li>
      </ul>



      <h1 className="font-bold pt-5">watch Later</h1>
      <ul>
        <li  className="flex gap-6">
        <Link  className="w-5 h-5" to="/history">History</Link>
         </li>
        <li  className="flex gap-6"> 
        <Link  className="w-5 h-5 py-3" to="/videos">YourVideos</Link>
        </li>
        <li  className="flex gap-6"> 
        <Link  className="w-5 h-5 py-6" to="/Watch Later">Watchlater</Link>
        </li>
        <li  className="flex gap-6"> 
        <Link  className="w-5 h-5 py-2" to="/Liked Videos">LikedVideos</Link>
        </li>
      </ul>



      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li  className="flex gap-6"> 
        <Link  className="w-5 h-5" to="/news">News</Link>
        </li>
        <li  className="flex gap-6"> 
        <Link  className="w-5 h-5 py-3" to="/shopping">Shopping</Link>
       </li>
        <li  className="flex gap-6 "> 
        <Link  className="w-5 h-5 py-6" to="/sport">Sport</Link>
        </li>
        <li  className="flex gap-6"> 
        <Link  className="w-5 h-5 py-3" to="/music">Music</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
