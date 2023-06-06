export const YOUTUBE_API_KEY = "AIzaSyAZwZ9JiNH3BPt-oclEsFCQwsNi2taZqcA";


export const YOUTUBE_VIDEOS_API =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=CA&maxResults=50&key=" + YOUTUBE_API_KEY;


export const YOUTUBE_VIDEO_DETAIL_API =   'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=';



export const YOUTUBE_SEARCH_API =  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="