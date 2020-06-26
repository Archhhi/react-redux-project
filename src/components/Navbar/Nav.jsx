import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.friendBlock}>
                <h2>Friends</h2>
                <div className={s.friendItem}>
                    <NavLink to='/1' className={s.friendItem}/>
                    <div>Andrey</div>
                </div>
                <div className={s.friendItem}>
                    <NavLink to='/2' className={s.friendItem}/>
                    <div>Sveta</div>
                </div>
                <div className={s.friendItem}>
                    <NavLink to='/3' className={s.friendItem}/>
                    <div>Sasha</div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;