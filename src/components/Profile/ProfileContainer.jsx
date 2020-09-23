import React from "react";
import {
    getStatus,
    getUserProfile,
    handleLike, handleLikeForUser,
    onAddPost, onAddPostForUser, onChangeText,
    savePhoto,
    saveProfile, setPostStatus,
    updateStatus
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import style from "./Profile.module.css";
import {getUsersForFriends} from "../../redux/users-reducer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        this.props.getUsersForFriends();
        if (this.props.match.params.userId) {
            this.props.setPostStatus(true);
        } else {
            this.props.setPostStatus(false);
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return (
            <div className={style.profileBlock}>
                <ProfileInfo {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    usersForFriends: state.usersPage.usersForFriends,
    myPosts: state.ProfilePage.myPosts,
    newPostText: state.ProfilePage.newPostText,
    isTogglePostStatus: state.ProfilePage.isTogglePostStatus,
    usersPosts: state.ProfilePage.usersPosts
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
        getUsersForFriends,
        onAddPost,
        handleLike,
        handleLikeForUser,
        onChangeText,
        setPostStatus,
        onAddPostForUser
    }),
    withRouter
)(ProfileContainer);