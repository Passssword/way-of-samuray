import style from './sidebar.module.css';

function Sidebar (props) {
	return (
		<div className={style.contentTitle}>
        	<div className={ `${style.sideBar} ${style.contactsOnline}` }>
        	(SideBar - инфоконт "Контакты онлайн" )
        	</div>
    	</div>
      )
}
export default Sidebar;