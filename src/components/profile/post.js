import style from './post.module.css';


function Post(props) {

  return (
        <div className={style.profilePostWrapper}>
          <div className={style.profilePostInfo}>
            <div className={style.profilePostFoto}></div>
            <div className={style.profilePostNickname}> { props.nickname } </div>
            <div className={style.profilePostDate}> {props.messageDate} </div>
          </div>
          
          <div className={style.profilePostContent}>
            { props.message }
          </div>
        </div>
  );
}

export default Post;
