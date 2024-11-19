import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import defaultUserAvatar from "../../assets/images/young-man-avatar-on-round-button_icon-icons.com_68262.png";

function User({
  user,
  isFollowingInProgress,
  followThunkCreator,
  unfollowThunkCreator,
}) {
  return (
    <div>
      <span>
        <NavLink to={`/profile/${user.id}`}>
          <img
            className={s.avatar}
            src={user.photos.small || defaultUserAvatar}
            alt={"avatar"}
          />
        </NavLink>
        <br />

        {user.name}
        <br />
        {user.status}
        <br />
        {user.followed ? (
          <button
            disabled={isFollowingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollowThunkCreator(user.id);
            }}
          >
            Unsubscribe
          </button>
        ) : (
          <button
            disabled={isFollowingInProgress.some((id) => id === user.id)}
            onClick={() => {
              followThunkCreator(user.id);
            }}
          >
            Subscribe
          </button>
        )}
        <br />
      </span>
    </div>
  );
}
export default User;
