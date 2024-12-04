import React, { useState } from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import defaultUserAvatar from "../../../assets/images/young-man-avatar-on-round-button_icon-icons.com_68262.png";
import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData"
import ProfileDataForm from "./ProfileDataForm";


function ProfileInfo(props) {
  const [edit, setEdit] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }
  console.log(props.profile);
  // function editPhoto() {
  //   setEdit(true);
  // }

  function editProfile() {
    setEdit(true);
  }

  // const chengePhoto = (e) => {
  //   const photoFile = e.target.files[0];
  //   if (photoFile) {
  //     console.log("changePhotoMethod" + photoFile);
  //     props.savePhotoProfile(photoFile);
  //     setEdit(false);
  //   }
  // };

  return (
    <div>
      <div>
        <img
          src={props.profile.photos.large || defaultUserAvatar}
          alt={"user`s avatar"}
          className={s.mainPhoto}
          // onClick={editPhoto}
        />
        {/* <div>
          {props.isOwner && edit && (
            <input type="file" onChange={chengePhoto}></input>
          )}
        </div> */}
      </div>
      <ProfileStatus {...props} /> <br />
      {edit
        ? <ProfileDataForm profile={props.profile} setEdit={()=>{setEdit(true)}}/>
        : <ProfileData profile={props.profile} isOwner={props.isOwner} setEdit={()=>{editProfile()}}/>
      }
    </div>
  );
}



export default ProfileInfo;
