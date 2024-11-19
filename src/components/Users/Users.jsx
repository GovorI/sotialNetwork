import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import s from "../common/paginator/Paginator.module.css";

function Users(props) {
  return (
    <div>
      <Paginator
        className={s.paginator}
        currentPage={props.currentPage}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
      />

      {props.users.map((u) => (
        <User
          key={u.id}
          user={u}
          isFollowingInProgress={props.isFollowingInProgress}
          followThunkCreator={props.followThunkCreator}
          unfollowThunkCreator={props.unfollowThunkCreator}
        />
      ))}
    </div>
  );
}
export default Users;
