export const YOUTUBE_API_KEY = "AIzaSyAD8u5uVNaZzXn4S30IZnq-pCPOw9247EM";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=24&key=";

export const YOUTUBE_VIDEO_DETAIL_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_CHANNEL_DETAIL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const CHANNEL_DETAIL_RAPID_API =
  "https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=";

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1ff2d9b88cmsh2d585290f8f786fp155cfajsn09fa13c914a1",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const YOUTUBE_COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";

export const YOUTUBE_RELATED_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&relatedToVideoId=";

export const LIVE_CHAT_COUNT = 30;

export const LIVE_VIDEO_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&q=news&type=video&key=";

export const MUSIC_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&videoCategoryId=10&regionCode=IN&key=";

export const GAMING_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&videoCategoryId=20&regionCode=IN&key=";

export const NEWS_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&videoCategoryId=25&regionCode=IN&key=";


export const SPORTS_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&videoCategoryId=17&regionCode=IN&key=";

export const VIDEO_CATEGORY_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyCIsgcqi-9-jbXL_JL5ujA9G0Radit6Ww0";

export const MUSIC_QUERY_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=music&key=AIzaSyCIsgcqi-9-jbXL_JL5ujA9G0Radit6Ww0";

	export const SEARCH_KEYWORD_VIDEOS_API =
	"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q="