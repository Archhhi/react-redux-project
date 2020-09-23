import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class MyPostsContainer extends React.Component {

    render() {
        return (
            <MyPosts postsData={this.props.postsData}
                     newPostText={this.props.newPostText}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    postsData: state.ProfilePage.postsData,
    newPostText: state.ProfilePage.newPostText
})

export default compose(
    connect(mapStateToProps, {}),
    withRouter
)(MyPostsContainer);