import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Search from "./Components/Home";
import Seedetail from "./Components/Detail";
function App() {
   return(
    <Router>
      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="details" element={<Seedetail/>} />
      </Routes>
    </Router>
   )
}
export default App



/*
{
  "Title": "Inception",
  "Year": "2010",
  "Rated": "PG-13",
  "Released": "16 Jul 2010",
  "Runtime": "148 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Christopher Nolan",
  "Writer": "Christopher Nolan",
  "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
  "Plot": "A thief who enters the dreams of others to steal secrets from their subconscious is given a chance to have his past crimes forgiven if he plants an idea into a target's mind.",
  "Language": "English, Japanese, French",
  "Country": "United States, United Kingdom",
  "Awards": "Won 4 Oscars. 158 wins & 220 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxN15BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  "Ratings": [
    { "Source": "Internet Movie Database", "Value": "8.8/10" },
    { "Source": "Rotten Tomatoes", "Value": "87%" },
    { "Source": "Metacritic", "Value": "74/100" }
  ],
  "Metascore": "74",
  "imdbRating": "8.8",
  "imdbVotes": "2,457,383",
  "imdbID": "tt1375666",
  "Type": "movie",
  "DVD": "07 Dec 2010",
  "BoxOffice": "$292,576,195",
  "Production": "Syncopy, Warner Bros. Pictures",
  "Website": "N/A",
  "Response": "True"
}
*/