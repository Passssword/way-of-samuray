import React from 'react';
import style from './Footer.module.css';

let footer = () => {
    return (
        <div className={style.footer}>
            Footer
            <div className={style.color_bar}>
                <div className={style.color1}></div>
                <div className={style.color2}></div>
                <div className={style.color3}></div>
                <div className={style.color4}></div>
                <div className={style.color5}></div>
            </div>
        </div>
    );
}

export default footer;