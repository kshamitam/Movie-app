#Movie-App


This is a simple React-based movie application that allows users to search for movies, see their details like title, Release year, Type with an overlay, add them to a watchlist, and remove them from the watchlist. The app interacts with the OMDB API to fetch movie data, and it saves the watchlist in the browser’s localStorage so that the data persists even when the page is refreshed.

Funtion wise details:

1.App.js :
The main component that manages the state of the app and holds all the logic for fetching data and managing the watchlist.
2.MovieList.js:
A presentational component that receives a list of movies (movies or watchlist) and a function (handlelistClick) as props. It displays the movies and allows users to click on a movie to either add it to the watchlist or remove it.
3.MovieListHeading.js:
A simple presentational component that displays a heading. It receives a heading prop to render dynamic text for the section titles (e.g., "Movies" or "Watch List").
4.SearchBox.js :
A functional component that contains the input field where users can type the name of the movie they are searching for. It receives searchValue and setSearchValue as props to manage the search query state.
5.WatchList.js & RemoveList.js :
These components are likely meant to handle displaying movies in the watchlist and removing them.
