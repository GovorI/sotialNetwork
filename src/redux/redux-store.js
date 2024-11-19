import { applyMiddleware, combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import { thunk as thunkMiddleware } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReduser,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
