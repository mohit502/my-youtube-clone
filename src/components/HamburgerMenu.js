import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImFilm } from "react-icons/im";
import { MdOutlineHome, MdLiveTv } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { IoMusicalNotes, IoSettingsOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { AiFillTrophy , } from "react-icons/ai";
import { AiOutlineFlag } from "react-icons/ai";
import {IoIosHelpCircleOutline} from "react-icons/io"
import {VscFeedback} from "react-icons/vsc"
import {RiQuestionAnswerFill} from "react-icons/ri"

import { RiLiveFill, RiNewspaperFill } from "react-icons/ri";

const HamburgerMenu = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return
  if (!isMenuOpen) return null;

  return (
    <div className=" ml-5 mr-5 w-48 h-[calc(100%-64px)] border-b-2">
      <ul className="text-base w-full  ">
        <li className="hover:bg-gray-100  py-1 flex  rounded-lg my-3">
          <Link className="pr-5 flex items-center " to="/">
            <span>
              <AiFillHome className="text-xl mr-5" />
            </span>
            Home
          </Link>
        </li>
        <li className="hover:bg-gray-100  py-1 flex  rounded-lg my-3">
          <Link to="liveVideos" className="pr-5 flex items-center">
            <span>
              <RiLiveFill className="text-xl mr-5" />
            </span>
            Live
          </Link>
        </li>
        <li className="hover:bg-gray-100  py-1 flex  rounded-lg my-3">
          <Link to="musicVideos" className="pr-5 flex items-center">
            <span>
              <IoMusicalNotes className="text-xl mr-5" />
            </span>
            Music
          </Link>
        </li>
        <li className="hover:bg-gray-100  py-1 flex  rounded-lg my-3">
          <Link to="gamingVideos" className="pr-5 flex items-center">
            <span>
              <SiYoutubegaming className="text-xl mr-5" />
            </span>
            Gaming
          </Link>
        </li>
        <li className="hover:bg-gray-100  py-1 flex  rounded-lg my-3">
          <Link to="newsVideos" className="pr-5 flex items-center">
            <span>
              <RiNewspaperFill className="text-xl mr-5" />
            </span>
            News
          </Link>
        </li>
        <li className="hover:bg-gray-100  py-1 flex  rounded-lg my-3 ">
          <Link to="sportsVideos" className="pr-5 flex items-center">
            <span>
              <AiFillTrophy className="text-xl mr-5" />
            </span>
            Sports
          </Link>
        </li>
        <li>
          <hr className="border-gray-600"/>
        </li>
        <li className="hover:bg-gray-100  py-1 flex  rounded-lg my-3 cursor-pointer">
          <div className="pr-5 flex items-center">
            <span>
              <IoSettingsOutline className="text-xl mr-5" />
            </span>
            Settings
          </div>
        </li>
        <li className="hover:bg-gray-100  py-1 flex  rounded-lg my-3 cursor-pointer">
          <div className="pr-5 flex items-center">
            <span>
              <AiOutlineFlag className="text-xl mr-5" />
            </span>
            Report
          </div>
        </li>
        <li className="hover:bg-gray-100  py-1 flex  rounded-lg my-3 cursor-pointer">
          <div className="pr-5 flex items-center">
            <span>
              <IoIosHelpCircleOutline className="text-xl mr-5" />
            </span>
            Help
          </div>
        </li>
        <li className="cursor-pointer hover:bg-gray-100  py-1 flex  rounded-lg my-3">
          <div className="pr-5 flex items-center">
            <span>
              <VscFeedback className="text-xl mr-5" />
            </span>
           Feedback
          </div>
        </li>
        <li className="hover:bg-gray-100  py-1   rounded-lg my-3 flex justify-center">
          
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mohit-bhatt-079202208/">Clone By Mohit  </a>
        </li>
        
      </ul>
    </div>
  );
};

export default HamburgerMenu;
