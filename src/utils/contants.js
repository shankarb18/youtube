const GOOGLE_API_KEY = "AIzaSyDeMjMrj7p1cnwqIL4d5uK-0fssxwuT4PU";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50regionCode=IN&key=" +
   GOOGLE_API_KEY;
  

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Live Chat >>>> Infinite Scroll >>>>>> Pagination