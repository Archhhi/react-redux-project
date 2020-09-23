import React from "react";
import Post from "./Post/Post";

const MyPosts = ({profile, handleLike, handleLikeForUser, isTogglePostStatus, myPosts, usersPosts}) => {

    let data = isTogglePostStatus ? usersPosts : myPosts;
    
    let postsElements = [...data]
        .reverse()
        .map(p => <Post
            id={p.id}
            key={p.id}
            date={p.date}
            postText={p.postText}
            like={p.like}
            likeActive={p.likeActive}
            profile={profile}
            handleLike={handleLike}
            handleLikeForUser={handleLikeForUser}
            isTogglePostStatus={isTogglePostStatus}
        />)

    return (
        <>
            {postsElements}
        </>
    )
}

export default MyPosts;