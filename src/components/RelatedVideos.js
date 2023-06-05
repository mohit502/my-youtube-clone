import React from "react";
import { useState, useEffect } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_RELATED_VIDEO_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import SuggestionVideoCard from "./SuggestionVideoCard";

const RelatedVideos = () => {
  const [relatedVideos, setRelatedVideo] = useState([]);
  const [searchParams] = useSearchParams();

  const getRelatedVideos = async () => {
    const data = await fetch(
      YOUTUBE_RELATED_VIDEO_API +
        searchParams.get("v") +
        "&key=" +
        YOUTUBE_API_KEY
    );
    const json = await data.json();
    const { items } = json;
    setRelatedVideo(items);
  };

  useEffect(() => {
    getRelatedVideos();
  }, searchParams.get('v'));

  return (
    <div className=" w-[500px] flex flex-col h-[400px] ">
      {relatedVideos.map((video) => (
        <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
          <SuggestionVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default RelatedVideos;
