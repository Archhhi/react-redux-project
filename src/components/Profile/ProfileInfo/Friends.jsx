import React from "react";
import style from "./ProfileInfo.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/avaFriend.png";

const Friends = React.memo(({usersForFriends}) => {

    function countFriends() {
        let count = usersForFriends.map(item => item);

        for (let i = 1; i <= 94; i++) {
            let ind = Math.floor(Math.random() * count.length);
            count.splice(ind, 1);
        }

        return count;
    }

    let usersData;

    if (usersForFriends) {
        usersData = countFriends();
    }

    return (
        <div className={style.columnLeftFriends}>
            <div className={style.columnFriendsTextBlock}>
                <span>Друзья {usersForFriends.length}</span>
            </div>
            {Object.assign(usersData).map(el =>
                <NavLink to={'/profile/' + el.id} key={el.id}>
                    <div className={style.friendBlock}>
                        <div className={style.friendImgBlock}>
                            <img src={el.photos.large || userPhoto}/>
                        </div>
                        <div className={style.friendNameBlock}>
                            <span>{el.name}</span>
                        </div>
                    </div>
                </NavLink>
            )}
        </div>
    )
})

export default Friends;