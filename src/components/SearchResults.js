import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {SEARCH_KEYWORD_VIDEOS_API , YOUTUBE_API_KEY} from "../utils/constants"
import { Link } from 'react-router-dom';
import SearchResultCard from './SearchResultCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  console.log(videos)

  const getVideos = async () => {
    const data = await fetch(SEARCH_KEYWORD_VIDEOS_API + searchParams.get("searchQuery") + "&key=" + YOUTUBE_API_KEY)
    const json = await data.json();
    setVideos(json.items);
  }

  useEffect(()=> {
    getVideos();
  },[]) 
  return (
    <div className='pt-4 ml-10'>

      {videos.map((video) => (
          <Link key ={video?.id?.videoId} to={"/watch?v="+ video?.id?.videoId}> 
            <SearchResultCard  info={video} />
          </Link>
      ))}
    </div>
  )
}

export default SearchResults