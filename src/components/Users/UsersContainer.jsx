import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, requestUsers
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
    getPageSize, getTotalUserCount,
    getCurrentPage, getIsFetching, getFollowingInProgress, getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (currentPage) => {
        const {pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, { unfollow, follow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers }),
)(UsersContainer);