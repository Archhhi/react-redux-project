import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <div className={s.selectedPage}>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <div>{profile.contacts.facebook}</div>
                <div>{profile.contacts.website}</div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.twitter}</div>
                <div>{profile.contacts.instagram}</div>
                <div>{profile.contacts.youtube}</div>
                <div>{profile.contacts.github}</div>
                <div>{profile.contacts.mainlink}</div>
                <div>
                    {profile.lookingForAJob
                        ? <div>Ищу Работу</div>
                        : <div>Не ищу работу</div>}
                </div>

            </div>
        </div>
    );
}

export default ProfileInfo;