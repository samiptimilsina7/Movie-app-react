import { BaseURL } from "../config/BaseURL";
import axios from "axios";

export const APIGetTopMovies=()=>{
    return axios.get(BaseURL+'list_movies.json')
}