import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile"
                         style={({isActive}) => ({color: isActive ? 'lightseagreen' : 'white'})}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs"
                         style={({isActive}) => ({color: isActive ? 'lightseagreen' : 'white'})}>Messages</NavLink>
            </div><div className={s.item}>
                <NavLink to="/users"
                         style={({isActive}) => ({color: isActive ? 'lightseagreen' : 'white'})}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news"
                         style={({isActive}) => ({color: isActive ? 'lightseagreen' : 'white'})}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music"
                         style={({isActive}) => ({color: isActive ? 'lightseagreen' : 'white'})}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings"
                         style={({isActive}) => ({color: isActive ? 'lightseagreen' : 'white'})}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
