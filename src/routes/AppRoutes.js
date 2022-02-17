import { Routes, Route } from 'react-router';
import { MovieDetails } from './pages/MovieDetails';
import { Services } from './pages/Services';

export const AppRoutes=()=>{
    return(
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/movie-details' element={<MovieDetails/>}/>
            <Route path='/services' element={<Services/>} />
        </Routes>
    );
}