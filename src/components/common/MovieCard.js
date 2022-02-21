import { useNavigate } from "react-router";
import cat from "../../components/images/cat.jpg";

export const MovieCard=({movie})=>{
    const navigate=useNavigate();
    const routeHandler=()=>{
        navigate('/movie/'+movie.id)
    }

    return(
        <div className="movie-card" onClick={routeHandler}>
            <img src={movie.medium_cover_image}/>
            <div className="movie-content">
                <div className="movie-title">
                    {movie.title}
                </div>
                <div className="year">{movie.year}</div>
            </div>
        </div>
    );
}