import React, {useState} from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
import icon_logo from "../../assets/images/icon_logo.png";

const Header = ({isAuth, headerData, logout}) => {

    let [isToggle, setIsToggle] = useState(true);

    const onToggle = () => {
        setIsToggle(!isToggle)
    }

    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.headerImg}>
                    <img src={icon_logo}/>
                </div>

                <div className={style.headerInputSearch}>
                    <input type="search" placeholder='Поиск'/>
                </div>

                {isAuth ?
                    <>
                        <div className={style.loginButtonBlock}>
                            <div className={style.loginButtonBlocks} onClick={onToggle}>
                                <div className={style.loginButtonBlockText}>
                                    {!headerData ? '...' : <span>{headerData.fullName}</span>}
                                </div>
                                <div className={style.loginButtonBlockImg}>
                                    {!headerData ? '...' : <img src={headerData.photos.small}/>}
                                </div>
                                <div className={style.loginButtonBlockUnicode}>
                                    &#129171;
                                </div>
                            </div>

                            <div className={style.clear}/>

                            <div className={style.dropDownMenu} id='dropDownMenu'
                                 style={isToggle ? {display: 'none'} : {display: 'block'}}>
                                <div className={style.dropDownMenuItem}>
                                    <div className={style.dropDownMenuImg}>
                                        {!headerData ? '...' : <img src={headerData.photos.small}/>}
                                    </div>
                                    <div className={style.dropDownMenuText}>
                                        {!headerData ? '...' : <span>{headerData.fullName}</span>}
                                    </div>
                                </div>
                                <div className={style.clear}/>
                                <div className={style.dropDownMenuHR}/>
                                <div className={style.dropDownMenuOption}>
                                    <span>Настройки</span>
                                    <span onClick={logout}>Выход</span>
                                </div>
                            </div>
                        </div>
                    </>

                    : <NavLink to={'/login'}><span>Войти</span></NavLink>
                }

                <div className={style.clear}/>
            </div>
        </header>
    );
}

export default Header;