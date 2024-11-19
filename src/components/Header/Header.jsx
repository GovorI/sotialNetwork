import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={s.header}>
      <img
        src="https://i.pinimg.com/originals/13/90/8a/13908a5b177c2ef879bc50b40a10a7bf.jpg"
        alt="logo"
      ></img>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
