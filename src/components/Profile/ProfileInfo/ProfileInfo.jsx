import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import defaultUserAvatar from "../../../assets/images/young-man-avatar-on-round-button_icon-icons.com_68262.png";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  const chengePhoto = (e) => {
    const photoFile = e.target.files[0];
    if (photoFile) {
      console.log("changePhotoMethod" + photoFile);
      props.savePhotoProfile(photoFile);
    }
  };

  return (
    <div>
      <img
        src={props.profile.photos.large || defaultUserAvatar}
        alt={"user`s avatar"}
        className={s.mainPhoto}
      />{" "}
      <div>
        {props.isOwner && <input type="file" onChange={chengePhoto}></input>}
      </div>
      <ProfileStatus {...props} />
      <br />
      <span>{props.profile.aboutMe}</span> <br />
      <span>{props.profile.fullName}</span> <br />
    </div>
  );
}
export default ProfileInfo;