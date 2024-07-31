import styleHeader from './header.module.css';
import logoImg from './../image/logo.png';
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className={styleHeader.headerWrapper}>

      <div className={styleHeader.headerTitle}>
        <img className={styleHeader.headerLogoImg} src={logoImg} />
        Social Network
      </div>
    
      <div className={styleHeader.headerContent}>

        {/*====Menu====*/}
        <nav className={styleHeader.menuWrapper}>
          <ul className={styleHeader.menuList}>
            <li><NavLink to="/">Homepage</NavLink></li>
            <li><NavLink to='/dialogs' activeClassName={styleHeader.activeLink}>Dialogs</NavLink></li>
            <li><NavLink to='/users' activeClassName={styleHeader.activeLink}>Users</NavLink></li>
            <li><NavLink to='/profile/' activeClassName={styleHeader.activeLink}>Profile</NavLink></li>
          </ul>
        </nav>
        {/*===========*/}
      </div>

      <div className={styleHeader.loginBlock}>
        <p>Login: {props.Authefication.login ? props.Authefication.login : "Not authoraized"}</p>
        <p>email: {props.Authefication.email ? props.Authefication.email : "Not authoraized"}</p>
        <NavLink to="/login">login</NavLink>
      </div>
    </div>
  );
}

export default Header;