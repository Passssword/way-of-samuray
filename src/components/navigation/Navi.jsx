import React from 'react';
import style from './Navi.module.css';

let navi = () => {
    return (
        <div className={style.navi_block}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/messeges">Messeges</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </div>
    );
}

export default navi;