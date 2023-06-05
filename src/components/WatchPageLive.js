import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_CHANNEL_DETAIL_API,
  YOUTUBE_VIDEO_DETAIL_API,
} from "../utils/constants";
import { useState } from "react";

import { kFormatter } from "../utils/helper";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPageLive = () => {
  const [searchParams] = useSearchParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [channelDetail, setChannelDetail] = useState([]);
  const [isLiveVideo, setIsLiveVideo] = useState(false);

  // console.log("items: ", items);
  // console.log('snippet',snippet);
  // console.log('statistcs',statistics);

  const dispatch = useDispatch();

  const getVideoDetail = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_DETAIL_API +
        searchParams.get("v") +
        "&key=" +
        YOUTUBE_API_KEY
    );
    const json = await data.json();
    const { items } = json;
    setVideoDetail(items);

    if (items[0]?.snippet?.liveBroadcastContent === "live") {
      setIsLiveVideo(true);
    }
    const cid = items[0]?.snippet?.channelId;
    const dataChannel = await fetch(
      YOUTUBE_CHANNEL_DETAIL_API + cid + "&key=" + YOUTUBE_API_KEY
    );
    const channelJSON = await dataChannel.json();
    const { items: items1 } = channelJSON;
    setChannelDetail(items1);
  };

  const getChannelDetail = async () => {};

  useEffect(() => {
    getVideoDetail();
    getChannelDetail();
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col ml-16 w-full">
      <div className="flex w-full">
        <div className="">
          <iframe
            width="900"
            height="506"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?&autoplay=1"
            }
            title="React Router v6 tutorial in Hindi #4 dynamic Routing with params"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {isLiveVideo && (
          <div className="w-full border-2 border-black">
            <LiveChat name={"Mohit"} message={"My name is Mohit"} />
          </div>
        )}
      </div>
      <h1> </h1>
      <div className=" text-xl font-medium mt-3 w-[900px]">
        {videoDetail[0]?.snippet?.title}
      </div>
      <div className="flex w-[900px] mt-2 items-center">
        <img
          className="rounded-full h-[50px] w-[50px]"
          src={channelDetail[0]?.snippet?.thumbnails?.default?.url}
          alt="channel-profile"
        />
        <div className="ml-5 font-medium">
          <p>{channelDetail[0]?.snippet?.title}</p>
          <p className="text-xs text-slate-500">
            {kFormatter(channelDetail[0]?.statistics?.subscriberCount)}{" "}
            subscribers
          </p>
        </div>
        <button className="ml-4 bg-black text-white  rounded-full  px-3 fontSize-xs h-[35px] w-[100px]">
          Subscribe
        </button>
      </div>
      
    </div>
  );
};

export default WatchPageLive;

// {channelDetail[0]?.snippet?.thumbnails?.default?.url}
