import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_CHANNEL_DETAIL_API,
  YOUTUBE_VIDEO_DETAIL_API,
} from "../utils/constants";
import { useState } from "react";

import { kFormatter } from "../utils/helper";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import RelatedVideos from "./RelatedVideos";
import store from "../utils/store";
import { deleteQuery } from "../utils/clickSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [channelDetail, setChannelDetail] = useState([]);
  const [isLiveVideo, setIsLiveVideo] = useState(false);

  const dispatch = useDispatch();
  // This code was meant for adding the search Feature
  // const navigate = useNavigate();
  // const searchQueryArr = useSelector((store)=> store.click.clicked)
  
  // if(searchQueryArr.length > 0){
  //   navigate(`/search?searchQuery=${searchQueryArr[0]}`)
  //   dispatch(deleteQuery());

  // }



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
  }, [searchParams.get('v')]);

  return (
    <div className="flex">
      <div className="flex flex-col ml-16 w-[calc(100%-500px)] ">
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
        <div className="flex w-[900px] mt-2 items-center ">
          <img
            className="hover:cursor-pointer rounded-full h-[50px] w-[50px]"
            src={channelDetail[0]?.snippet?.thumbnails?.default?.url}
            alt="channel-profile"
          />
          <div className="ml-5 font-medium">
            <p className="hover:cursor-pointer font-semibold">
              {channelDetail[0]?.snippet?.title}
            </p>
            <p className=" text-xs text-slate-500">
              {kFormatter(channelDetail[0]?.statistics?.subscriberCount)}{" "}
              subscribers
            </p>
          </div>
          <button className="ml-4 bg-black text-white  rounded-full  px-3 fontSize-xs h-[35px] w-[100px]">
            Subscribe
          </button>
          <div className=" ml-64 flex items-center ">
            <div className="flex items-center border-r-2 border-gray-300 cursor-pointer  bg-gray-200 hover:bg-gray-300 rounded-l-full p-2">
              <button>
                <BiLike className="text-xl" />
              </button>
              <span className="mx-1 font-semibold text-sm">
                {kFormatter(videoDetail[0]?.statistics?.likeCount)}
              </span>
            </div>
            <div className=" cursor-pointer flex items-center rounded-r-full p-2 hover:bg-gray-300 bg-gray-200">
              <button className="">
                <BiDislike className="text-xl" />
              </button>
            </div>

            <div className="hover:bg-gray-300 cursor-pointer mx-5 flex items-center p-2 bg-gray-200 rounded-full">
              <RiShareForwardLine className="ml-1 text-xl" />
              <span className="ml-1 mr-1 text-sm">Share</span>
            </div>
            <div className="hover:bg-gray-300 cursor-pointer flex items-center p-2 bg-gray-200 rounded-full">
              <TfiDownload className="text-xl ml-1" />
              <span className="ml-1 mr-1 text-sm">Download</span>
            </div>
          </div>
        </div>
        <div className="my-2 ">
          <span className=" text-xl">
            {kFormatter(videoDetail[0]?.statistics?.viewCount)} views
          </span>
        </div>
        <CommentsContainer />
      </div>
      <RelatedVideos />
    </div>
  );
};

export default WatchPage;

// {channelDetail[0]?.snippet?.thumbnails?.default?.url}
