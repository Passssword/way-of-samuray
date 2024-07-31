import React from 'react';
import style from './profile.module.css';
import styleSendingMessege from './../../generalStyles/formSendingMessege.module.css';
import Post from './post.js';
import avatarkaDefault from './../../image/avatarka.jpg';
import { Redirect } from 'react-router-dom';

// addPostFunc()   in props
function Profile(props) {

  /*---Обработчик отправки сообщения в профиле---*/
  let linkText = React.createRef();

  /* Обработчик изменения текста поля ввода сообщения в профиле */
  function onPostChange () {
    let textChange = linkText.current.value;
    props.changeTextInTextarea(textChange);
  }
  /*---------------------------------------------*/
  let postsElements = props.profilePage.posts.map( (element) => {
    return ( <Post nickname={element.nickName} message={element.message} messageDate={element.messageDate} /> );
  });

  //Redirect - перенаправление на страницу логина (если не залогинен)
  if(props.isAuth == false) return ( <Redirect to={'/login'} /> );

  return (
    <div className={style.profileWrapper}>

      <div className={style.profileFoto}>
        {/*Profile foto*/}
      <img src={props.profilePage.profileData.photos.small ? props.profilePage.profileData.photos.small : avatarkaDefault} />
      </div>

      <div className={style.profileInfo}>
        Profile info
        <hr />
        fullName: {props.profilePage.profileData.fullName} <br />
        aboutMe: {props.profilePage.profileData.aboutMe} <br />
        lookingForAJob: {props.profilePage.profileData.lookingForAJob ? "GIVE ME JOB!!!" : "not looking a job"} <br />
        lookingForAJobDescription: {props.profilePage.profileData.lookingForAJobDescription} <br />
      </div>
      
      <div className={style.profileFormSenderPlace}>
            <fieldset>
              <legend>Оставить сообщение</legend>
              <textarea ref={linkText} onChange={onPostChange} value={props.profilePage.postStateOnChange} />
              <div className={styleSendingMessege.profileInputareaButtonsPlace}>
                <button onClick={ props.sendProfileMessage }>Send message</button>
              </div>
            </fieldset>
      </div>

      <div className={style.profilePosts}>
        {postsElements}
      </div>
    </div>
  );
}

export default Profile;
