import axios from "axios";
import { useEffect, useState } from "react";
import { APIGetTopMovies } from "../API/Movie";
import { MovieCard } from "../components/common/MovieCard";
import cat from "../components/images/cat.jpg";
import { BaseURL } from "../config/BaseURL";

//get,put,patch,post,delete axios asynchronous function

export const Landing=()=>{

    const [movies,setMovies]=useState([]);

    useEffect(async()=>{
        // await axios.get(BaseURL+'list_movies.json').then(res=>{
        //     console.log(res.data.data.movies)
        //     setMovies([...res.data.data.movies]);
        // })
        await loadMovies();
    },[]);

    const loadMovies=async()=>{
        let res=await APIGetTopMovies();
        setMovies([...res.data.data.movies]);
    } //same thing as in between line 14-17 but its more ethical to write like this creating a function

    return(
        <section className="wrapper"> 
            <h1>Movie List</h1>
            <div className="movie-content">
                {movies.map((movie,key)=><MovieCard key={key} movie={movie}/>)}
                {/* <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/> */}
            </div>
        </section>
    );
}