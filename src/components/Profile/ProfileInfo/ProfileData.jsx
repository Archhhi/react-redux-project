import React, {useState} from "react";
import style from "./ProfileInfo.module.css";

const ProfileData = ({profile}) => {

    let [toggleInfo, setToggleInfo] = useState(false);

    return (
        <div className={style.profileDataBlock}>
            <div className={style.profileDataAboutMe}>
                <span className={style.aboutMeSpan_1}>Обо мне:</span>
                <span className={style.aboutMeSpan_2}>{profile.aboutMe}</span>
            </div>

            <div className={style.dropDownMenuData}>

                {!toggleInfo &&
                <div onClick={() => setToggleInfo(true)} className={style.dropDownButton}>
                    <span>Показать подробную информацию</span>
                </div>
                }
                {toggleInfo &&
                <>
                    <div onClick={() => setToggleInfo(false)} className={style.dropDownButton}>
                        <span>Скрыть подробную информацию</span>
                    </div>

                    <div className={style.menuData}>
                        <div>
                            <span className={style.menuDataSpan_1}>Ищу работу:</span>
                            <span className={style.menuDataSpan_2}>{profile.lookingForAJob ? "Да" : "Нет"}</span>
                        </div>
                        {profile.lookingForAJob &&
                        <div>
                            <span className={style.menuDataSpan_1}>Мои навыки:</span>
                            <span className={style.menuDataSpan_2}>{profile.lookingForAJobDescription}</span>
                        </div>
                        }
                        <div>
                            {Object.keys(profile.contacts).map(key => {
                                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                            })}
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><span className={style.menuDataSpan_1}>{contactTitle}:</span> <span
        className={style.menuDataSpan_2}>{contactValue}</span></div>
}

export default ProfileData;