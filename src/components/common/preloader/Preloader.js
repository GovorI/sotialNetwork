import React from "react";
import preloaderImg from "../../../assets/images/Pacman.gif";
import s from "./Preloader.module.css";

function Preloader(props) {
  return (
    <div>
      <div>
        <img src={preloaderImg} alt={"preloader"} className={s.element} />
      </div>
      <div>
        <p className={s.element}>Loading...</p>
      </div>
    </div>
  );
}

export default Preloader;
