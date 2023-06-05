import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import LiveVideosContainer from "./components/VideoContainers/LiveVideosContainer";
import WatchPageLive from "./components/WatchPageLive";
import MusicVideosContainer from "./components/VideoContainers/MusicVideosContainer";
import GamingVideosContainer from "./components/VideoContainers/GamingVideosContainer";

import SportsVideosContainer from "./components/VideoContainers/SportsVideosContainer";
import NewsVideosContainer from "./components/VideoContainers/NewsVideosContainer";
import SearchResults from "./components/SearchResults";

import { Router , BrowserRouter, Route, Switch} from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "search", element: <SearchResults /> },
      { path: "liveVideos", element: <LiveVideosContainer /> },
      { path: "musicVideos", element: <MusicVideosContainer /> },
      { path: "gamingVideos", element: <GamingVideosContainer /> },
      { path: "sportsVideos", element: <SportsVideosContainer /> },
      { path: "newsVideos", element: <NewsVideosContainer /> },

      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "watchLive",
        element: <WatchPageLive />,
      },
    ],
  },
]);

function App() {
  return (
    
      <Provider store={store}>
        <div className="App font-roboto">
          <Header />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    
  );
}

//Header
//Hamburger Button
//Logo
//Search
//SearchBox
//Mic
//AccountOptions

//Body
//HamburgerMenu
//Home
//Shorts
//Subscriptions
//Library

//MainContainer
//RecommendationList
//VideoCardsList
//VideoCard

export default App;
