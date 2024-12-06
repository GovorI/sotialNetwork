import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getStatusThunkCreator,
  updateStatusThunkCreator,
  userProfileThunkCreator,
  savePhotoProfile,
  saveProfile,
} from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function ProfileContainer({
  userProfileThunkCreator,
  getStatusThunkCreator,
  profile,
  status,
  isAuth,
  authorizedUserId,
  savePhotoProfile,
  saveProfile,
}) {
  const { userId } = useParams();
  const id = userId ? userId : authorizedUserId;

  useEffect(() => {
    userProfileThunkCreator(id);
    getStatusThunkCreator(id);
  }, [userProfileThunkCreator, getStatusThunkCreator, id, status]);

  return (
    <div>
      <Profile
        isOwner={!userId}
        profile={profile}
        status={status}
        updateStatusThunkCreator={updateStatusThunkCreator}
        savePhotoProfile={savePhotoProfile}
        saveProfile={saveProfile}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    userProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    savePhotoProfile,
    saveProfile,
  })
)(ProfileContainer);
