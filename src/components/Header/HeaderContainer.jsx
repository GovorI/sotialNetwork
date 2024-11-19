import React from "react";
import Header from "./Header";
import { logout } from "../../redux/auth-reducer";
import { connect } from "react-redux";

function HeaderContainer(props) {
  // props.getAuthUserData();
  return <Header {...props} />;
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
}

export default connect(mapStateToProps, { logout })(HeaderContainer);
