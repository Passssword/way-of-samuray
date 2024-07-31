import styleUsers from './users.module.css';
import Preloader from './preloader.js';
import { NavLink } from "react-router-dom";
import avatarkaDefault from './../../image/avatarka.jpg';

function Users (props) {

	let countPages = props.totalUsersCount / props.pageSize;
	countPages = Math.ceil(countPages);
	let arrayPages = [];
	for ( let i=0; i<=countPages; i++){
		arrayPages.push(i);
	}

	/*--------------------*/
	function setFollowUser (userId) {
		props.followUserThunkCreator(userId);
	}

	function setUnfollowUser (userId) {
		props.unfollowUserThunkCreator( userId )
	}
	
	/*--------------------*/
	return (
		<div className={styleUsers.usersPageWrapper}>
			{props.togglePreloader ? <Preloader /> : null }
		 	<div>
				<div className={styleUsers.usersPagesLinks}>
					{arrayPages[props.currentPage]-2 < 1 ? <span>.</span> : <span onClick={ () => { props.getUsersData(arrayPages[props.currentPage]-2, props.pageSize, props.setCurrentPageThunkCreator) } }>{arrayPages[props.currentPage]-2}</span>}
					{arrayPages[props.currentPage]-1 < 1 ? <span>..</span> : <span onClick={ () => { props.getUsersData(arrayPages[props.currentPage]-1, props.pageSize, props.setCurrentPageThunkCreator) } }>{arrayPages[props.currentPage]-1}</span>}
					<span className={styleUsers.usersButtonPageActive}>{arrayPages[props.currentPage]}</span>
					<span onClick={ () => { props.getUsersData(arrayPages[props.currentPage]+1, props.pageSize, props.setCurrentPageThunkCreator) } }>{arrayPages[props.currentPage]+1}</span>
					<span onClick={ () => { props.getUsersData(arrayPages[props.currentPage]+2, props.pageSize, props.setCurrentPageThunkCreator) } }>{arrayPages[props.currentPage]+2}</span>
			 	</div>
			 	<div>
				 	<span>totalUsersCount: {props.totalUsersCount}</span>
				 	<br/>
			 		<span>pageSize: {props.pageSize}</span>
			 		<br/>
			 		<span>currentPage: {props.currentPage}</span>
			 		<br/>
			 		<span>countPages: {countPages}</span>
			 	</div>
			</div>

		 	<div className={styleUsers.usersWrapper}> 
			{ props.usersData.map( (elem) => { return (
				<div className={styleUsers.usersCardWrapper}>
					<div className={styleUsers.usersCardTopBox}>
						<div className={styleUsers.usersCardLogoBox}>
							<div className={styleUsers.usersCardImgBox}>
								<NavLink to={'/profile/'+elem.id}><img src={elem.photos.small ? elem.photos.small : avatarkaDefault} /></NavLink>
							</div>
						</div>
					</div>
					<div className={styleUsers.usersCardBottomBox}>
						<div className={styleUsers.usersCardInfoBox}>
							<span>Id: {elem.id}</span>
							<span>Name: {elem.name} </span>
							<span className={styleUsers.usersCardButtonBox}>
							{elem.followed ? <button disabled={props.toggleFollowButton.some(item => item == elem.id) ? true : false } onClick={ () => { setUnfollowUser(elem.id) } }>Unfollow</button>
								: <button disabled={props.toggleFollowButton.some(item => item == elem.id) ? true : false } onClick={ () => { setFollowUser(elem.id) } }>Follow</button>}
							</span>
						</div>
					</div>
				</div>)
			}) }
			</div>
		</div>
		
		 	);
}

export default Users;