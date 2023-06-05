import React from 'react'
import RecommendationButton from './RecommendationButton'
const list = ["All", "Music", "Raga Music", "Mixes", "Live", "News", "Computer Programming", "Gaming", "AI", "Cricket", "Game Shows", "CS:GO", "Comedy", "Live", "News", "Guitar", "Recently Uploaded", "Watched", "soidjoa", "oaijsdoi"]

const RecommendationList = () => {
  return (
    <div className="flex ml-4">
      <RecommendationButton name="All" />
      <RecommendationButton name="Gaming" />
      <RecommendationButton name="Songs" />
      <RecommendationButton name="Live" />
      <RecommendationButton name="Soccer" />
      <RecommendationButton name="Cricket" />
      <RecommendationButton name="Cooking" />
      <RecommendationButton name="Cricket" />
      <RecommendationButton name="Valentines" />
      <RecommendationButton name="Cricket" />
      <RecommendationButton name="Cooking" />
      <RecommendationButton name="Indian Music" />
      <RecommendationButton name="Podcasts" />
      <RecommendationButton name="React JS" />
      <RecommendationButton name="Trending" />
    </div>
    // <div id="reccomendation-list" className='flex '>
      
    //   {list.map((item)=> {return  <RecommendationButton name={item} />})}
    // </div>
  )
}

export default RecommendationList