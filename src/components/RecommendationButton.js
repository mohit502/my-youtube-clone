import React from 'react'
import { Link } from 'react-router-dom'

const   RecommendationButton = ({name}) => {
  return (
      <div>
        <Link to={"/search?searchQuery=" + name}> 
      <button className='px-[6px] py-1 rounded-md border bg-gray-200 m-2 text-sm whitespace-nowrap' >{name}</button>
        </Link>
      </div>
      
    
  )
}

export default RecommendationButton