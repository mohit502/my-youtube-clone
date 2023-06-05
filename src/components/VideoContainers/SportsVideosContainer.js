import React, { useEffect, useState } from "react";
import {
  GAMING_VIDEO_API,
  LIVE_VIDEO_LIST_API,
  MUSIC_VIDEO_API,
  SPORTS_VIDEO_API,
  YOUTUBE_API_KEY,
  YOUTUBE_VIDEOS_API,
} from "../../utils/constants";
import VideoCard, { AdVideoCard } from "../VideoCard";
import { Link } from "react-router-dom";
import RecommendationList from "../RecommendationList";
import LiveVideoCard from "../LiveVideoCard";

const SportsVideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(SPORTS_VIDEO_API + YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div>
      <RecommendationList />
      <div className="flex flex-wrap justify-around">
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video?.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SportsVideosContainer;
