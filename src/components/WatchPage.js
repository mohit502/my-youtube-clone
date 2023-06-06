import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import { YOUTUBE_API_KEY, YOUTUBE_VIDEO_DETAIL_API } from '../utils/constants';
import { useState } from 'react';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetail, setVideoDetail] = useState([]);

  const dispatch = useDispatch();


  const getVideoDetail = async () => {
    const data = await fetch(YOUTUBE_VIDEO_DETAIL_API+ searchParams.get("v") + "?&key=" + YOUTUBE_API_KEY);
    const json = await data.json();
    setVideoDetail(json);
    console.log(json);
    console.log(videoDetail);
  }

  useEffect(()=>{
    getVideoDetail();
      dispatch(closeMenu());
  },[])
  return (
    <div className='pl-24' >
    <iframe 
    
     
    width="900" 
    height="506"
     src={"https://www.youtube.com/embed/"+ searchParams.get("v")+"?&autoplay=1"}
      title="React Router v6 tutorial in Hindi #4 dynamic Routing with params" 
      frameBorder="1" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
      </div>
  )
}

export default WatchPage