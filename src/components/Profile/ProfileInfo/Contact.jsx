import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";

const Contact = ({ contactTitle, contactValue }) => {
    return (
      <div className={s.contact}>
        <b>{contactTitle}: </b>
        {contactValue}
      </div>
    );
  };

  export default Contact