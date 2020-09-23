import React from "react";
import style from "../../ProfileInfo/ProfileInfo.module.css";
import c from "classnames";
import userPhoto from '../../../../assets/images/avaFriend.png';

const Post = ({profile, handleLike, handleLikeForUser, isTogglePostStatus, postText, date, like, likeActive, id}) => {

    return (
        <div className={style.postBlock}>
            <div className={style.postsBL}>
                <div className={style.postsMyImg}>
                    <img src={profile.photos.small ? profile.photos.small : userPhoto}/>
                </div>
                <div className={style.postsInfo}>
                    <div className={style.postsMyName}>
                        <span>{profile.fullName}</span>
                    </div>
                    <div className={style.postsDate}>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
            <div style={{clear: 'both'}}/>

            <div className={style.postsBlock}>
                <div className={style.postsText}>
                    <span>{postText}</span>
                </div>

                <div className={style.dropDownMenuHR}/>
                <div className={style.postsActiveBlock}>
                    <div className={style.postLikes}>
                        <div className={style.one} id='one'>
                            <svg viewBox="0 0 24 24"
                                 style={
                                     {
                                         width: '21px',
                                         verticalAlign: 'middle',
                                         marginRight: '5px'
                                     }
                                 } onClick={isTogglePostStatus ? () => handleLikeForUser(id) : () => handleLike(id)}
                                 className={c({[style.active]: likeActive})}>
                                <path
                                    d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
                            </svg>
                            <div className={style.currentLikesBlock}>
                                <span className={style.currentLikes}>{like}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;