import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";


export const Header = ()=> {
    return (
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Menu'>Menu</NavLink>
                <NavLink to='/Select'>Select</NavLink>
            </div>
        )
}