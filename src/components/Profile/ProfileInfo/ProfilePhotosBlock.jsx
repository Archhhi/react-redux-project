import React from "react";
import style from "./ProfileInfo.module.css";

const ProfilePhotosBlock = ({profile}) => {
    return (
        <div className={style.photosContainer}>
            <div className={style.quantityPhotos}>
                <span>Мои фотографии 1</span>
            </div>
            <div className={style.photosBlock}>
                <div className={style.photo}>
                    <img src={profile.photos.large}/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePhotosBlock;