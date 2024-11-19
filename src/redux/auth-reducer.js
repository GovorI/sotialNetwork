import { stopSubmit } from "redux-form";
import { auth } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export function setAuthUserData(userId, email, login, isAuth) {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
}

export function getAuthUserData() {
  return function (dispatch) {
    return auth.me().then((res) => {
      if (res.data.resultCode === 0) {
        const { id, email, login } = res.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
}

export function login(email, password, rememberMe) {
  return function (dispatch) {
    auth.login(email, password, rememberMe).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        console.log(res);
        const err =
          res.data.messages.length > 0 ? res.data.messages[0] : "some error";
        dispatch(stopSubmit("login", { _error: err }));
      }
    });
  };
}

export function logout() {
  return function (dispatch) {
    auth.logout().then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
}
