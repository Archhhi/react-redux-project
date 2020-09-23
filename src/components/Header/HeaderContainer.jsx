import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {compose} from "redux";
import {getUserHeaderData} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}
                       headerData={this.props.headerData}
                       isAuth={this.props.isAuth}
                       login={this.props.login}
                       logout={this.props.logout}
        />
    }
}

const mapStateToProps = (state) => ({
    headerData: state.ProfilePage.headerData,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authorizedUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {
        logout,
        getUserHeaderData,
        getAuthUserData
    }),
    withRouter
)(HeaderContainer);