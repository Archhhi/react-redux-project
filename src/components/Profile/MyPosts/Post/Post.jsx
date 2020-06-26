import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://assets.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" alt=""/>
            {props.message}
            <div>
                <span>like {props.LikesCount}</span>
            </div>
        </div>
    );
}

export default Post;