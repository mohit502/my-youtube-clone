import React from 'react'

const RecommendationButton = ({name}) => {
  return (
      <div>
      <button className='px-[6px] py-1 rounded-md border bg-gray-300 m-2 text-xs whitespace-nowrap' >{name}</button>
      </div>
      
    
  )
}

export default RecommendationButton