import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import WatchList from "./components/WatchList";
import RemoveList from "./components/RemoveList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f4c0ea71`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieWatchList = JSON.parse(
      localStorage.getItem("react-movie-app-list")
    );
    setWatchList(movieWatchList);
  }, []);

  const saveLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-list", JSON.stringify(items));
  };

  const addwatchList = (movie) => {
    const newWatchList = [...watchlist, movie];
    setWatchList(newWatchList);
    saveLocalStorage(newWatchList);
  };

  const removelist = (movie) => {
    const newremovelist = watchlist.filter(
      (watchlist) => watchlist.imdbID !== movie.imdbID
    );
    setWatchList(newremovelist);
    saveLocalStorage(newremovelist);
  };

  return (
    <div className="container-fluid">
      <div>
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handlelistClick={addwatchList}
          ActionComponent={WatchList}
        />
      </div>
      <div>
        <MovieListHeading heading="Watch List" />
        {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      </div>
      <div className="row">
        <MovieList
          movies={watchlist}
          handlelistClick={removelist}
          ActionComponent={RemoveList}
        />
      </div>
    </div>
  );
};

export default App;
