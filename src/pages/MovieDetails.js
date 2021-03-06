import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { BaseURL } from "../config/BaseURL";
// import { MovieSuggestions } from "../components/common/MovieSuggestions";

export const MovieDetails=()=>{

    const {id}=useParams(); //accessing the parameters of current route

    const [movie,setMovie]=useState([])

    useEffect(async()=>{
        await axios.get(BaseURL+'movie_details.json?movie_id='+id).then(res=>{
            console.log(res.data.data)
            setMovie(res.data.data.movie)
        })
    },[]);

    return(
        <section className="movie-detail wrapper">
            <img src={movie.background_image} alt="" height={300}/>
            <h1>{movie.title}</h1>
            <p>{movie.description_full}</p>
            <h1>Rating: {movie.rating}</h1>
        </section>
        
        // <div>This is the details page {id}</div>
    );
}