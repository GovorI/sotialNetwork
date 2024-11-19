import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/formsControl/FormsControls";
import style from "../common/formsControl/FormsControls.module.css";

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          name={"email"}
          component={Input}
          type="email"
          validate={required}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name={"password"}
          component={Input}
          type="password"
          validate={required}
        />
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={"input"} />
        remember me
      </div>
      {props.error && (
        <div className={style.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

function Login(props) {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
