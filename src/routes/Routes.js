import { Landing } from "../pages/Landing";
import { MovieDetails } from '../pages/MovieDetails';
import { Search } from '../pages/Search';

export const ROUTES=[
    {path:'/',element:<Landing/>},
    {path:'/movie/:id',element:<MovieDetails/>},
    {path:'/search/:keyword',element:<Search/>}
];