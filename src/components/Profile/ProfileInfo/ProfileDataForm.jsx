import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import style from "../../common/formsControl/FormsControls.module.css";
import {
  createField,
  Input,
  Textarea,
} from "../../common/formsControl/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button>Save</button>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <b>Full Name: </b> {createField("Full Name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job: </b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills: </b>{" "}
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me: </b> {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts: </b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div className={s.contact} key={key}>
              <b>{key}: </b> {createField(key, `contacts.${key}`, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormRedux = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormRedux;
