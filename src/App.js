import React, { useState } from "react";
import {useEffect} from "react"
import MovieCard from "./MovieCard";
import './App.css'
import SearchIcon from './search.svg'
// 177a043c
const API_URL = "http://www.omdbapi.com?apikey=177a043c";
const m1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}
const App = () => {
    const [movies,setmovies] = useState([]);
    const [searchTerm,setsearchTerm] = useState([])

    const searchMovie = async(title)=>{
        const response  = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setmovies(data.Search)
    }
    useEffect(()=>{
        searchMovie('Spiderman')
    },[])
    // accepts a callback function and an empty dependecy array
    return(
        <>
        <div className="app">
            <h1>NetFlix</h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={()=>searchMovie(searchTerm)}/>
            </div>
            {
                movies.length > 0
                ?(
                    <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))
                    }
                </div> 
                ):(
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                )
            }
 
        </div>
        </>
    );
}
export default App;