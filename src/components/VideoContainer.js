import React, { useEffect, useState } from "react";
import { LIVE_VIDEO_LIST_API, YOUTUBE_API_KEY, YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  console.log(videos);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API + YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
    console.log(json)
  };

  return (
    <div className="flex flex-wrap justify-evenly">
      {videos.map((video) => (
          <Link key ={video?.id} to={"/watch?v="+ video?.id}> 
            <VideoCard  info={video} />
          </Link>
      ))}
    </div>
  );
};

export default VideoContainer;






////
// import React, { useEffect, useState } from 'react'
// import { YOUTUBE_VIDEOS_API } from '../utils/constants';
// import VideoCard from './VideoCard';


// const VideoContainer = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(()=>{
//     getVideos();
//   },[]);

//   const getVideos = async () => {
//     const data = await fetch(YOUTUBE_VIDEOS_API);
//     const json = await data.json();
    
//     setVideos(json.items);
//   }


//   return (
//     <div className='p-2 grid grid-flow-col gap-2 border-2 border-red-600'>
//       <VideoCard info ={videos[0]}/>
//     </div>  
//   )
// }

// export default VideoContainer