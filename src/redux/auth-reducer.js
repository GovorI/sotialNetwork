import { stopSubmit } from "redux-form";
import { auth, securityAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS"

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
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

export function getCaptchaUrlSuccess(captchaUrl){
  console.log('action',captchaUrl)
  return {type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl}}
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

export function login(email, password, rememberMe, captchaUrl) {
  return function (dispatch) {
    auth.login(email, password, rememberMe, captchaUrl).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        if(res.data.resultCode === 10){
          dispatch(getCaptchaUrl())
        }
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

export function getCaptchaUrl() {
  return function (dispatch) {
    securityAPI.getCaptchaUrl().then((res)=>{
      console.log("responce",res.data.url)
      dispatch(getCaptchaUrlSuccess(res.data.url))
    })
  }
}
