import style from './content.module.css';
import Sidebar from './sidebar/sidebarContener.jsx';
import DialogsContener from './dialogs/dialogsContener.jsx';
import Profile from './profile/profileContener.jsx';
import UsersContener from './users/usersContener.jsx';
import Login from './login/login.jsx';
import { Route } from "react-router-dom";

function Content(props) {
  return (
    <div className={style.contentWrapper}>

      <Sidebar />
      
      <div className={style.contentContent}>
        <Route path='/dialogs' render={ () => <DialogsContener /> } />
        <Route path='/users' render={ () => <UsersContener /> } />
        <Route path='/profile/:userId' render={ () => <Profile /> } />
        <Route exact path='/profile' render={ () => <Profile /> } />
        <Route exact path='/login' render={ () => <Login /> } />
      </div>
      
    </div>
  );
}

export default Content;
