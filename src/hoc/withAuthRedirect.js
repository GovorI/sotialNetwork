import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";

 function withAuthRedirect(Component) {
    function RedirectComponent({isAuth, ...props}) {
        const navigate = useNavigate()

        useEffect(() => {
            if (!isAuth) {
                navigate('/login')
            }
        }, [isAuth, navigate]);

        if (!isAuth) {
            return null
        }
        return <Component {...props}/>
    }

    function mapStateToProps(state) {
        return {
            isAuth: state.auth.isAuth
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
}
export default withAuthRedirect