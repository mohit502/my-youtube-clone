import React from "react";

const SearchListItem = ({ suggestion }) => {
  return (
    <li
      key={suggestion}
      className="hover:bg-slate-200 cursor-default flex p-1.5"
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
      <a href="/search?searchQuery=abcd"  >
        <p>{suggestion}</p>
      </a>
    </li>
  );
};

export default SearchListItem;
