import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center m-2 border-1 ">
        <img
          className="h-8  "
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />

        
        <p className="m-2 text-xs">
          <span className="font-semibold mr-2">{name} </span> {message}
        </p>
      </div>
  )
}

export default ChatMessage