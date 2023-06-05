import React, { useState, useEffect } from "react";
import { kFormatter } from "../utils/helper";
import {
  YOUTUBE_CHANNEL_DETAIL_API,
  YOUTUBE_API_KEY,
  YOUTUBE_VIDEO_DETAIL_API,
} from "../utils/constants";

const SearchResultCard = ({ info }) => {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videoDetail, setVideoDetail] = useState([]);

  const {
    snippet,
    id: { videoId },
  } = info;
  

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

  const getVideoDetail = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_DETAIL_API + videoId + "&key=" + YOUTUBE_API_KEY
    );
    const json = await data.json();
    const { items } = json;
    setVideoDetail(items);
  };

  useEffect(() => {
    getChannelDetail();
    getVideoDetail();
  }, []);

  return (
    <div className=" m-2 my-4 w-[calc(100%-192px)] flex items-start ">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <div className="flex ml-3">
        <ul>
          <li className=" ">{title}</li>
          <li className="text-xs text-gray-500">
            {kFormatter(videoDetail[0]?.statistics?.viewCount)} views
          </li>
          <li>
            <div className="flex items-center mt-4 text-xs text-gray-500">
              <img
                className="rounded-full h-[25px] w-[25px]  mr-2"
                src={channelDetail[0]?.snippet?.thumbnails?.default?.url}
                alt="channel-profile"
              />
              <span>{channelTitle}</span>
            </div>
          </li>
          <li className="text-gray-600 text-xs mt-4">{snippet?.description}</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchResultCard;
