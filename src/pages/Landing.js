import axios from "axios";
import { useEffect, useState } from "react";
import { MovieCard } from "../components/common/MovieCard";
import cat from "../components/images/cat.jpg";

//get,put,patch,post,delete axios asynchronous function

export const Landing=()=>{

    const [movies,setMovies]=useState([]);

    useEffect(async()=>{
        await axios.get('https://yts.mx/api/v2/list_movies.json').then(res=>{
            console.log(res.data.data.movies)
            setMovies([...res.data.data.movies]);
        })
    },[]);

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