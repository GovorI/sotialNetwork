import React, { useState } from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import defaultUserAvatar from "../../../assets/images/young-man-avatar-on-round-button_icon-icons.com_68262.png";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
  const [edit, setEdit] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }
  console.log(props.profile);
  function editPhoto() {
    setEdit(true);
  }

  const chengePhoto = (e) => {
    const photoFile = e.target.files[0];
    if (photoFile) {
      console.log("changePhotoMethod" + photoFile);
      props.savePhotoProfile(photoFile);
      setEdit(false);
    }
  };

  return (
    <div>
      <div>
        <img
          src={props.profile.photos.large || defaultUserAvatar}
          alt={"user`s avatar"}
          className={s.mainPhoto}
          onClick={editPhoto}
        />
        <div>
          {props.isOwner && edit && (
            <input type="file" onChange={chengePhoto}></input>
          )}
        </div>
      </div>
      <ProfileStatus {...props} /> <br />
      <ProfileData profile={props.profile} />
    </div>
  );
}

const ProfileData = ({ profile }) => {
  return (
    <div>
      <div>
        <b>Full Name: </b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills: </b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}: </b>
      {contactValue}
    </div>
  );
};
export default ProfileInfo;
