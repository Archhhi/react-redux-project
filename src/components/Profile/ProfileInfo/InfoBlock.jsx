import React, {useState} from "react";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileEdit";
import ProfileData from "./ProfileData";

const InfoBlock = ({profile, status, updateStatus, usersForFriends, myPosts}) => {

    function counterPosts () {
        if (myPosts.length >= 5) {
            return 'постов';
        } else if (myPosts.length === 1) {
            return 'пост';
        } else if (myPosts.length >= 2 && myPosts.length <= 4) {
            return 'поста';
        } else {
            return 'постов';
        }
    }

    let countPosts = counterPosts();

    return (
        <div className={style.infoBlock}>
            <div className={style.infoBlockName}>
                {profile.fullName}
            </div>
            <div className={style.infoBlockStatus}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={style.dropDownMenuHR}/>
            <ProfileData profile={profile}/>
            <div className={style.dropDownMenuHR}/>
            <div className={style.infoItemsBlock}>
                <div className={style.infoItem}>
                    <span className={style.infoItemSpanNumber}>7 000</span>
                    <span className={style.infoItemSpanText}>подписок</span>
                </div>
                <div className={style.infoItem}>
                    <span className={style.infoItemSpanNumber}>{ usersForFriends.length }</span>
                    <span className={style.infoItemSpanText}>друзей</span>
                </div>
                <div className={style.infoItem}>
                    <span className={style.infoItemSpanNumber}>1</span>
                    <span className={style.infoItemSpanText}>фотографии</span>
                </div>
                <div className={style.infoItem}>
                    <span className={style.infoItemSpanNumber}>{ myPosts.length }</span>
                    <span className={style.infoItemSpanText}>{ countPosts }</span>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock;