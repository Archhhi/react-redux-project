import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import iconHome from "../../assets/images/iconHome.png";
import iconNews from "../../assets/images/iconNews.png";
import iconMessage from "../../assets/images/iconMessage.png";
import iconSubscribe from "../../assets/images/iconSubscribe.png";
import iconUsers from "../../assets/images/iconUsers.png";
import iconMusic from "../../assets/images/iconMusic.png";
import iconSettings from "../../assets/images/iconSettings.png";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink to='/profile' activeClassName={s.activeLink}>
                <div className={s.item}>
                    <div className={s.itemPhoto}>
                        <img src={iconHome}/>
                    </div>
                    <span className={s.itemLink}>Моя страница</span>
                </div>
            </NavLink>
            <NavLink to='/news' activeClassName={s.activeLink}>
                <div className={`${s.item} ${s.active}`}>
                    <div className={s.itemPhoto}>
                        <img src={iconNews}/>
                    </div>
                    <span className={s.itemLink}>Новости</span>
                </div>
            </NavLink>
            <NavLink to='/dialogs' activeClassName={s.activeLink}>
                <div className={s.item}>
                    <div className={s.itemPhoto}>
                        <img src={iconMessage}/>
                    </div>
                    <span className={s.itemLink}>Сообщения</span>
                </div>
            </NavLink>
            <NavLink to='/friends' activeClassName={s.activeLink}>
                <div className={s.item}>
                    <div className={s.itemPhoto}>
                        <img src={iconSubscribe}/>
                    </div>
                    <span className={s.itemLink}>Подписки</span>
                </div>
            </NavLink>
            <NavLink to='/users' activeClassName={s.activeLink}>
                <div className={`${s.item} ${s.active}`}>
                    <div className={s.itemPhoto}>
                        <img src={iconUsers}/>
                    </div>
                    <span className={s.itemLink}>Люди</span>
                </div>
            </NavLink>
            <NavLink to='/music' activeClassName={s.activeLink}>
                <div className={s.item}>
                    <div className={s.itemPhoto}>
                        <img src={iconMusic}/>
                    </div>
                    <span className={s.itemLink}>Музыка</span>
                </div>
            </NavLink>
            <NavLink to='/settings' activeClassName={s.activeLink}>
                <div className={s.item}>
                    <div className={s.itemPhoto}>
                        <img src={iconSettings}/>
                    </div>
                    <span className={s.itemLink}>Настройки</span>
                </div>
            </NavLink>
        </nav>
    );
}

export default Nav;