import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/avaFriend.png';
import MyPosts from "../MyPosts/MyPosts";
import ProfileAddPost from "./ProfileAddPost";
import Friends from "./Friends";
import InfoBlock from "./InfoBlock";
import ProfilePhotosBlock from "./ProfilePhotosBlock";
import {Link} from "react-router-dom";
import edit from "../../../assets/images/edit.png";

const ProfileInfo = ({
                         profile, status, updateStatus, usersForFriends, onAddPost,
                         handleLike, myPosts, newPostText, onChangeText, isTogglePostStatus,
                         usersPosts, onAddPostForUser, handleLikeForUser
                     }) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profileInfoBlock}>
            <div className={style.profileColumnLeft}>
                <div className={style.imgBlock}>
                    <img src={profile.photos.large || userPhoto} className={style.mainPhoto}/>

                    <div className={style.showBlock}>
                        <div className={style.updatePhoto}>
                            <div className={style.updatePhotoIcon}>
                                <img src={edit}/>
                            </div>
                            <span>Обновить фотографию</span>
                        </div>
                        <div className={style.deletePhoto}>
                            <span>Удалить фотографию</span>
                        </div>
                    </div>

                    <Link to={'/edit'}>
                        <div className={style.editProfile}>
                            <span>Редактировать</span>
                        </div>
                    </Link>
                </div>

                <Friends
                    usersForFriends={usersForFriends}
                />
            </div>

            <InfoBlock
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                usersForFriends={usersForFriends}
                myPosts={myPosts}
            />

            <ProfilePhotosBlock
                profile={profile}
            />

            <ProfileAddPost
                profile={profile}
                onAddPost={onAddPost}
                newPostText={newPostText}
                onChangeText={onChangeText}
                isTogglePostStatus={isTogglePostStatus}
                onAddPostForUser={onAddPostForUser}
            />

            {isTogglePostStatus ?
                <div className={style.postsContainerText}>
                    <span>Записи {profile.fullName}</span>
                    <div className={style.dropDownMenuHR}/>
                </div> :
                <div className={style.postsContainerText}>
                    <span>Мои записи</span>
                    <div className={style.dropDownMenuHR}/>
                </div>}


            <div className={style.postsContainer}>
                <MyPosts
                    profile={profile}
                    handleLike={handleLike}
                    handleLikeForUser={handleLikeForUser}
                    myPosts={myPosts}
                    isTogglePostStatus={isTogglePostStatus}
                    usersPosts={usersPosts}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;