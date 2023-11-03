import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
      <div className="px-5 flex w-full ">
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
          <iframe
            width="100%"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" w-100 h-full overflow-y-auto bg-white ">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
