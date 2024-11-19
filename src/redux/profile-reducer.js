import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, How are you?", likes: 15 },
    { id: 2, message: "This is my first post!", likes: 20 },
  ],
  profile: null,
  status: "",
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id:
          state.posts.length > 0
            ? state.posts[state.posts.length - 1].id + 1
            : 1,
        message: action.postText,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}

export function addPostActionCreator(postText) {
  return {
    type: ADD_POST,
    postText,
  };
}

export function setUserProfile(profile) {
  return { type: SET_USER_PROFILE, profile };
}

export function setStatus(status) {
  return { type: SET_STATUS, status };
}

export function userProfileThunkCreator(userId) {
  return function (dispatch) {
    profileAPI.getProfile(userId).then((res) => {
      dispatch(setUserProfile(res.data));
    });
  };
}

export function getStatusThunkCreator(userId) {
  return function (dispatch) {
    profileAPI.getStatus(userId).then((res) => {
      dispatch(setStatus(res.data));
    });
  };
}

export function updateStatusThunkCreator(status) {
  return function (dispatch) {
    profileAPI.updateStatus(status).then((res) => {
      if (res.data.resaultCode === 0) {
        dispatch(setStatus(res.data));
      }
    });
  };
}
