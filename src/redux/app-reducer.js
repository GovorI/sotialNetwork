import { getAuthUserData } from "./auth-reducer";

const INIAIALIZED_SUCCESS = "INIAIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

export function appReduser(state = initialState, action) {
  switch (action.type) {
    case INIAIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
}

export function initializedSuccess() {
  return {
    type: INIAIALIZED_SUCCESS,
  };
}

export function initializeApp() {
  return function (dispatch) {
    dispatch(getAuthUserData()).then(() => {
      dispatch(initializedSuccess());
    });
  };
}

export default appReduser;
