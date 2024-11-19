import React from "react";
import "./ProfileInfo.module.css";
// import s from "../Profile.module.css";
import Preloader from "../../common/preloader/Preloader";
import defaultUserAvatar from "../../../assets/images/young-man-avatar-on-round-button_icon-icons.com_68262.png";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      Main content
      {/* <img
                className={s.logo}
                src="https://gas-kvas.com/uploads/posts/2023-02/1675485994_gas-kvas-com-p-fonovii-risunok-dlya-shirokogo-rabochego-s-16.jpg"
                alt="profile-img"
            /> */}
      <div>
        <img
          src={props.profile.photos.large || defaultUserAvatar}
          alt={"user`s avatar"}
        />{" "}
        <ProfileStatus {...props} />
        <br />
        <span>{props.profile.aboutMe}</span> <br />
        <span>{props.profile.fullName}</span> <br />
        ava + discription
      </div>
    </div>
  );
}
export default ProfileInfo;
