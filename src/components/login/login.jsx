import style from './login.module.css';
// import DialogsContener from './dialogs/dialogsContener.jsx';
// import Profile from './profile/profileContener.jsx';
// import UsersContener from './users/usersContener.jsx';
// import { Route } from "react-router-dom";

function Login(props) {
  return (
    <div className={style.loginWrapper}>
      <div className={style.loginForm}>
      Login Form
      <br/>
      <input placeholder="please inter your login" />
      <br/>
      <input type="password" />
      </div>
      
    </div>
  );
}

export default Login;
