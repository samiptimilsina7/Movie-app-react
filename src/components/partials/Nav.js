import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../common/Logo";
import { useNavigate } from "react-router";

export const Nav=()=>{

    const [keyword,setKeyword]=useState('');

    const navigate=new useNavigate();

    const keywordHandler=(e)=>{
        setKeyword(e.target.value)
    }

    const changeRoute=()=>{
        navigate('/search/'+keyword)
    } //to change the route to the search page

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
                    <div className="form-input">
                        <label>Search</label>
                        {/* <NavLink to={'/search/:keyword'}> */}
                            <input type="text" placeholder="Search Everything" value={keyword} onChange={keywordHandler}/>
                            <div onClick={changeRoute}>S</div> 
                        {/* </NavLink> */}
                    </div>
                </div>
            </div>
        </nav>
        
    );
}