import React, { useState, useEffect } from "react";
import { kFormatter, truncate } from "../utils/helper";
import {
  YOUTUBE_CHANNEL_DETAIL_API,
  YOUTUBE_API_KEY,
  YOUTUBE_VIDEO_DETAIL_API,
} from "../utils/constants";

const SuggestionVideoCard = ({ info }) => {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videoDetails , setVideoDetails] = useState([]);
  console.log("axc", videoDetails)

  const { snippet  } = info;
  const { channelId } = snippet;
  const { channelTitle, title } = snippet;

  const getChannelDetail = async () => {
    const dataChannel = await fetch(
      YOUTUBE_CHANNEL_DETAIL_API + channelId + "&key=" + YOUTUBE_API_KEY
    );
    const channelJSON = await dataChannel.json();
    const { items: items1 } = channelJSON;
    setChannelDetail(items1);
  };

  const getViews = async () => {
    const data = await fetch(YOUTUBE_VIDEO_DETAIL_API + info?.id?.videoId  + "&key=" + YOUTUBE_API_KEY)
    const json = await data.json();
    setVideoDetails(json.items);

  }

  useEffect(() => {
    getChannelDetail();
    getViews();
  }, []);

  return (
    <div className=" ml-5 m-2 w-[500px]  flex items-center ">
      

      <img className="rounded-lg h-2/6 w-2/6" alt="thumbnail" src={videoDetails[0]?.snippet?.thumbnails?.medium?.url} />
     
      <div className="flex ml-2 text-sm">
        <ul>
          <li className="font-bold py-2 w-[220px]">{truncate(title)}</li>
          <li>{channelTitle}</li>
          <li>{kFormatter(videoDetails[0]?.statistics?.viewCount)} views</li>
        </ul>
      </div>
    </div>
  );
};


export default SuggestionVideoCard;

