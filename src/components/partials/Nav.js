import { NavLink } from "react-router-dom";
import { Logo } from "../common/Logo";

export const Nav=()=>{
    return(
        <nav>
            <Logo/>
            <div className="nav-items">
                <div className="nav-item">
                    <NavLink to={'/'}>Home</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={'/movie/:id'}>Movie Details</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={'/search/:keyword'}>Search</NavLink>
                </div>
            </div>

            <div className="form-input">
                <input type="text"/>Search
            </div>
        </nav>
        
    );
}