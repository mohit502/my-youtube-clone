import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import {MdOutlineNotificationsNone} from "react-icons/md"
import {RiVideoUploadLine} from "react-icons/ri"
import { addQuery } from "../utils/clickSlice";


const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false); 

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

   

    // const searchQueryHandler = (event) => {
    //     if (
    //         (event?.key === "Enter" || event === "searchButton") &&
    //         searchQuery?.length > 0
    //     ) {
    //         dispatch(addQuery(searchQuery))
    //     }
    // };




  const getSearchSuggestions = async () => {
    //make an api call
    // if the difference between the api calls in less than 200 ms
    // decline api call
    /**
     * keypress - i
     *  re-Renders
     * useEffect
     * setTimeout is start -> api called after 200ms
     *
     * keypress -ip
     * destroy the old component(useEffect Return method)
     * component re-render
     * useEffect
     * setTimeout is start -> api called after 200 ms
     *
     *
     */
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache.searchQuery) {
        setSearchSuggestions(searchCache.searchQuery);
      } else {
        getSearchSuggestions();
      }
    }, 2);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-4   fixed w-[100%] top-0 h-16 bg-white ">
      <div className="flex  border-black col-span-1 pt-2">
        <img
          className="h-6 hover:cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
          alt="hamburger-menu"
        />

        <a href="/">
          <img
            className="h-6 mx-4 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>

      <div className="pl-72 col-span-10  ">
        <div className="flex items-center">
          <input
            className="w-1/2 border border-gray-400  leading-normal rounded-l-full py-1.5 pl-3"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder="Search"
            // onKeyUp={searchQueryHandler}
            
          />

          <button className="border border-gray-400 rounded-r-full  border-l-0 px-4 py-1.5 bg-searchBG">
            {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-black text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path></svg>   */}
            {/* <span class="material-icons">search</span> */}
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon h-6 w-6 "
            >
              <g className="style-scope yt-icon">
                <path
                  d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                  className="style-scope yt-icon"
                />
              </g>
            </svg>
          </button>
        </div>
        {showSuggestions && (
          <div className="  m-1 fixed bg-white w-[435px] shadow-xl rounded-lg border-gray-500 border-1">
            <ul className="">
              {searchSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="hover:bg-slate-200 cursor-default flex p-1.5"
                  onClick={() => setSearchQuery(suggestion)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="style-scope yt-icon h-6 w-6 mx-2 "
                  >
                    <g className="style-scope yt-icon">
                      <path
                        d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                        className="style-scope yt-icon"
                      />
                    </g>
                  </svg>
                  <a href={"/search?searchQuery=" + suggestion}>
                    <p>{suggestion}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* <input className='p-[8px] pl-4 border border-gray-400 w-1/2 rounded-l-full' type='text' value={searchQuery}
        onChange={ (e) => setSearchQuery(e.target.value) }/>
        <button className=' hover:cursor-pointer bg-slate-200  py-[5.2px] px-[4px] border border-gray-400 rounded-r-full border-l-0' ><svg className='inline-block mb-[5px] mx-4' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" id="search"><path d="M448.3 424.7L335 311.3c20.8-26 33.3-59.1 33.3-95.1 0-84.1-68.1-152.2-152-152.2-84 0-152 68.2-152 152.2s68.1 152.2 152 152.2c36.2 0 69.4-12.7 95.5-33.8L425 448l23.3-23.3zM120.1 312.6c-25.7-25.7-39.8-59.9-39.8-96.3s14.2-70.6 39.8-96.3 59.9-40 96.2-40c36.3 0 70.5 14.2 96.2 39.9s39.8 59.9 39.8 96.3-14.2 70.6-39.8 96.3c-25.7 25.7-59.9 39.9-96.2 39.9-36.3.1-70.5-14.1-96.2-39.8z"></path></svg></button> */}
      </div>

      <div className="col-span-1 flex items-center justify-around ">
        <RiVideoUploadLine className="text-2xl" />
        <MdOutlineNotificationsNone className="text-3xl"/>
        <img
          className="h-8  "
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
