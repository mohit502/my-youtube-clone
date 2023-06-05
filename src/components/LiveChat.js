import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomMessage, randomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const handleSubmit = () => {
    dispatch(
      addMessage({
        name: "MOHIT",
        message: liveMessage,
      })
    );
  };

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: randomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="mx-2  border border-gray-400  border-b-0  h-[470px] overflow-y-scroll  scrollbar flex flex-col-reverse">
        <div>
          {chatMessages.map((chatMessage, i) => (
            <ChatMessage
              key={i}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
        </div>
      </div>

      <form
        className="flex w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setLiveMessage("");
        }}
      >
        <input
          className=" ml-2 w-[90%] border border-gray-400  leading-normal  py-1.5 pl-3"
          type="text"
          value={liveMessage}
          placeholder="Type in your message"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="border bg-slate-300 border-gray-400 border-l-0 w-[10%] mr-2 flex justify-center items-center"
        >
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className=" h-6 "
          >
            <g>
              <path d="M4.01,4.62l14.12,7.07l-3.06-0.66L4,8.64L4.01,4.62 M18.13,12.32L4.01,19.38L4,15.36l11.07-2.39L18.13,12.32 M3.01,3L3,9.44 L14.86,12L3,14.56L3.01,21L21,12L3.01,3L3.01,3z"></path>
            </g>
          </svg>
        </button>
      </form>
    </>
  );
};

export default LiveChat;
