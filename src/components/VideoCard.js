import React, { useState, useEffect } from "react";
import { kFormatter } from "../utils/helper";
import {
  YOUTUBE_CHANNEL_DETAIL_API,
  YOUTUBE_API_KEY,
} from "../utils/constants";

const VideoCard = ({ info }) => {
  const [channelDetail, setChannelDetail] = useState([]);

  const { snippet, statistics } = info;
  const { channelId } = snippet;
  const { channelTitle, title, thumbnails } = snippet;

  const getChannelDetail = async () => {
    const dataChannel = await fetch(
      YOUTUBE_CHANNEL_DETAIL_API + channelId + "&key=" + YOUTUBE_API_KEY
    );
    const channelJSON = await dataChannel.json();
    const { items: items1 } = channelJSON;
    setChannelDetail(items1);
  };
  useEffect(() => {
    getChannelDetail();
  }, []);

  return (
    <div className=" m-2 w-[320px]  ">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <div className="flex">
        <img
          className="rounded-full h-[35px] w-[35px] mt-2 mr-2"
          src={channelDetail[0]?.snippet?.thumbnails?.default?.url}
          alt="channel-profile"
        />
        <ul>
          <li className="font-semibold py-2">{title}</li>
          <li className="text-sm text-gray-500">{channelTitle}</li>
          <li className="text-sm text-gray-500">
            {kFormatter(statistics?.viewCount)} views
          </li>
        </ul>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;

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
