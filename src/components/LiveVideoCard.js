import React from "react";
import { kFormatter } from "../utils/helper";

const LiveVideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" m-2 w-[320px]  ">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>100 viewing</li>
        <li className="bg-red-600 inline-block p-1 rounded-sm text-xs text-white ml-1">Live</li>
      </ul>
    </div>
  );
};



export default LiveVideoCard;

























// import React from 'react'

// const VideoCard = ({ info ={}}) => {
//   console.log(info);
//   const { snippet, statistics } = info;
//   const {channelTitle, title, thumbnails} = snippet;

//   console.log(snippet);

//   return (
//     <div className='h-[100px] w-[200px] border-2 border-black'>
//       <img src={thumbnails.high} alt="" />
//     </div>
//   )
// }

// export default VideoCard;