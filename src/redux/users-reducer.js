import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";

let initialState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  totalUsersCount: 20,
  isFetching: false,
  isFollowingInProgress: [],

  //     {
  //         id: 1,
  //         subscribed: false,
  //         description: 'Sound is my vibrations',
  //         fullName: 'Ilia',
  //         location: {city: 'Baranovichi', country: 'Belarus'}
  //     },
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING:
      return {
        ...state,
        isFollowingInProgress: action.isFetching
          ? [...state.isFollowingInProgress, action.userId]
          : state.isFollowingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
}

export function subscribe(userId) {
  return {
    type: FOLLOW,
    id: userId,
  };
}

export function unsubscribe(userId) {
  return {
    type: UNFOLLOW,
    id: userId,
  };
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users: users,
  };
}

export function setCurrentPage(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
}

export function setTotalUsersCount(totalUsersCount) {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount,
  };
}

export function toggleIsFetching(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
}

export function toggleIsFollowing(userId, isFetching) {
  return {
    type: TOGGLE_FOLLOWING,
    userId,
    isFetching,
  };
}

export function requestUsers(page, pageSize) {
  return function getUsers(dispatch) {
    dispatch(toggleIsFetching(true));
    // dispatch(setCurrentPage(page));
    usersAPI.getUsers(page, pageSize).then((res) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(res.data.items));
      dispatch(setTotalUsersCount(res.data.totalCount));
    });
  };
}

export function followThunkCreator(userId) {
  return function follow(dispatch) {
    dispatch(toggleIsFollowing(userId, true));
    usersAPI.follow(userId).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(subscribe(userId));
      }
      dispatch(toggleIsFollowing(userId, false));
    });
  };
}

export function unfollowThunkCreator(userId) {
  return function unfollow(dispatch) {
    dispatch(toggleIsFollowing(userId, true));
    usersAPI.unfollow(userId).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(unsubscribe(userId));
      }
      dispatch(toggleIsFollowing(userId, false));
    });
  };
}
