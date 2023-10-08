import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import VideoCard  from "./VideoCard";
import { Link } from "react-router-dom";
//import ShimmerResMenu from "./ShimmerResMenu";
 //import { AdVideoCard } from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  //if(VideoCard === null) return <ShimmerResMenu />;

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    //console.log(json);
    setVideos(json?.items);
    console.log(json);
  };
  
  return (
    <div className="flex flex-wrap hover:bg-black-100">
      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
