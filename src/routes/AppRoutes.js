import { Routes, Route } from 'react-router';
import { ROUTES } from '../routes/Routes';
// import { Landing } from '../pages/Landing';
// import { MovieDetails } from "../pages/MovieDetails";
// import { Search } from '../pages/Search';

export const AppRoutes=()=>{
    return(
        <Routes>
            {/* <Route path='/' element={<Landing/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
            <Route path='/search/:keyword' element={<Search/>} /> */}

            {ROUTES.map((route,key)=>{
                return <Route path={route.path} element={route.element} key={key}/>
            })
            }
        </Routes>
    );
}