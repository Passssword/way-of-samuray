import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navi.module.css';

let navi = () => {
    return (
        <div className={style.navi_block}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/messeges" activeClassName={style.active}>Messeges</NavLink></li>
                <li><NavLink to="/profile" activeClassName={style.active}>Profile</NavLink></li>
                <li><NavLink to="/news" activeClassName={style.active}>News</NavLink></li>
                <li><NavLink to="/settings" activeClassName={style.active}>Settings</NavLink></li>
            </ul>
        </div>
    );
}

export default navi;