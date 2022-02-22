import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Loader } from "../components/common/loader/Loader";
import { MovieCard } from "../components/common/MovieCard";
import { APIGetSearchedTopMovies } from "../API/SearchedMovie";

export const Search=()=>{

    const {keyword}=useParams();

    const [movies,setMovies]=useState([]);

    const [loading,setLoading]=useState(true);

    useEffect(async()=>{
        // await axios.get(BaseURL+'list_movies.json').then(res=>{
        //     console.log(res.data.data.movies)
        //     setMovies([...res.data.data.movies]);
        // })
        await loadMovies();
    },[]);

    const loadMovies=async()=>{
        setLoading(true);
        let res=await APIGetSearchedTopMovies(keyword);
        setMovies([...res.data.data.movies]);
        setLoading(false);
    } //same thing as in between line 14-17 but its more ethical to write like this creating a function


    return(
        <section className="wrapper"> 
            <h1>Found {movies.length} Results for {keyword}</h1>
            <div className="movie-content">
                {loading?<Loader/>:
                 movies.map((movie,key)=><MovieCard key={key} movie={movie}/>)}
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