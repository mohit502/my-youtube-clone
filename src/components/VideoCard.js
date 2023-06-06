import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" m-2 w-[320px]  ">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
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