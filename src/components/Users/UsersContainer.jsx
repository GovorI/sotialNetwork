import Users from "./Users";
import { connect } from "react-redux";
import {
  setCurrentPage,
  toggleIsFollowing,
  requestUsers,
  followThunkCreator,
  unfollowThunkCreator,
} from "../../redux/users-reducer";
import React from "react";
import preloader from "../../assets/images/Pacman.gif";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsers,
  getUsersPage,
  getCurrentPage,
  getTotalUserCount,
  getIsFetching,
  getIsFollowingInProgress,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
    // this.props.toggleIsFetching(true)
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //     .then(res => {
    //         this.props.toggleIsFetching(false)
    //         this.props.setUsers(res.data.items)
    //         this.props.setTotalUsersCount(res.data.totalCount)
    //     })
  }

  onPageChanged(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    // this.props.toggleIsFetching(true)
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //     .then(res => {
    //         this.props.toggleIsFetching(false)
    //         this.props.setUsers(res.data.items)
    //     })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div>
            <img src={preloader} alt={"preloader"} />
          </div>
        ) : (
          <Users
            onPageChanged={this.onPageChanged.bind(this)}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            followThunkCreator={this.props.followThunkCreator}
            unfollowThunkCreator={this.props.unfollowThunkCreator}
            isFollowingInProgress={this.props.isFollowingInProgress}
            toggleIsFollowing={this.props.toggleIsFollowing}
          />
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: getUsers(state),
    pageSize: getUsersPage(state),
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUserCount(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
  };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         subscribe: (userId) => {
//             dispatch(subscribe(userId))
//         },
//         unsubscribe: (userId) => {
//             dispatch(unsubscribe(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCount(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }
// export default withAuthRedirect(connect(mapStateToProps, {
//     setCurrentPage,
//     toggleIsFollowing,
//     getUsersThunkCreator,
//     followThunkCreator,
//     unfollowThunkCreator
// })(UsersContainer))

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    setCurrentPage,
    toggleIsFollowing,
    getUsersThunkCreator: requestUsers,
    followThunkCreator,
    unfollowThunkCreator,
  })
)(UsersContainer);
