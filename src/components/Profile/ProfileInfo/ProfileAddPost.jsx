import React, {useEffect, useState} from 'react';
import style from "../ProfileInfo/ProfileInfo.module.css";
import {reduxForm} from "redux-form";
import {NavLink} from "react-router-dom";
import userPhoto from '../../../assets/images/avaFriend.png';

const AddNewPostForm = ({onChangePostText, handleSubmit, newPostText, isTogglePostStatus}) => {

    let isToggle = isTogglePostStatus;

    return (
        <form onSubmit={handleSubmit}>
            {!isToggle &&
            <>
                <div className={style.postsInputBlock}>
                <textarea onChange={onChangePostText}
                          name={'newPost'}
                          placeholder={'Что у Вас нового?'}
                          value={newPostText}
                />
                </div>
                <div className={style.addPostBlock}>
                    <button>Добавить пост</button>
                </div>
            </>}

            {isToggle &&
            <>
                <div className={style.postsInputBlock}>
                <textarea onChange={onChangePostText}
                          name={'newPost'}
                          placeholder={'Напишите что нибудь...'}
                          value={newPostText}
                />
                </div>
                <div className={style.addPostBlock}>
                    <button>Добавить пост</button>
                </div>
            </>}
        </form>
    );
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export const ProfileAddPost = ({profile, onAddPost, onChangeText, newPostText,
                                   isTogglePostStatus, onAddPostForUser}) => {

    let postAdd = () => {
        isTogglePostStatus ? onAddPostForUser() : onAddPost();
    }

    let onChangePostText = (e) => {
        let text = e.target.value
        onChangeText(text)
    }

    return (
        <div className={style.postsAddContainer}>
            <NavLink to={'profile'}>
                <div className={style.postsImgBlock}>
                    <img src={profile.photos.small ? profile.photos.large : userPhoto}/>
                </div>
            </NavLink>

            <AddNewPostFormRedux
                onChangePostText={onChangePostText}
                onSubmit={postAdd}
                newPostText={newPostText}
                isTogglePostStatus={isTogglePostStatus}
            />
        </div>
    )
}

export default ProfileAddPost