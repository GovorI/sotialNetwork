import React from "react"
import Contact from "./Contact";

const ProfileDataForm = ({ profile }) => {
    return (
      <div>
        EDITFORM!!!
        <button>Save</button>
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

  export default ProfileDataForm