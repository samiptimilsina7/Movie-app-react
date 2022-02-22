import { BaseURL } from "../config/BaseURL";
import axios from "axios";

export const APIGetSearchedTopMovies=(keyword)=>{
    return(
        axios.get(BaseURL+'list_movies.json?query_term='+keyword)

    );
}

// export const APIGetSearchedMovie =(keyword)=>{
//     return axios.get('list_movies.json?query_term='+keyword);
//  }
 