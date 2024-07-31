import { usersAPI } from './../api/api.js';
/*---------------------*/
// типы событий
const FOLLOW = 'USER-FOLLOW';
const UNFOLLOW = 'USER-UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';
const TOGGLE_FOLLOW_BUTTON = 'TOGGLE-FOLLOW-BUTTON';
/*---------------------*/

let initialState = {
	items: [],
	pageSize: 12,
	totalUsersCount: 0,
	currentPage: 1,
	togglePreloader: false,
	toggleFollowButton: []
};
const reducerUsers = (state = initialState, action) => {
	let stateCopy = {...state};
	
	let itemID = stateCopy.items.findIndex(item => item.id === action.id);
	switch(action.type) {
		case 'USER-FOLLOW':
			stateCopy.items = [...state.items];
			stateCopy.items[itemID] = {...state.items[itemID]};
			stateCopy.items[itemID].followed = true;
			return stateCopy;
		case 'USER-UNFOLLOW':
			stateCopy.items = [...state.items];
			stateCopy.items[itemID] = {...state.items[itemID]};
			stateCopy.items[itemID].followed = false;
			return stateCopy;
		case 'SET-USERS':
			stateCopy.items = [...action.data.items];
			stateCopy.totalUsersCount = action.data.totalCount;
			return stateCopy;
		case 'SET-CURRENT-PAGE':
			stateCopy.items = [...action.pageData.items];
			stateCopy.currentPage = action.newCurrentPage;
			return stateCopy;
		case 'TOGGLE-PRELOADER':
			stateCopy.togglePreloader = action.togglePreloaderData;
			return stateCopy;
		case 'TOGGLE-FOLLOW-BUTTON':
			stateCopy.toggleFollowButton = [...state.toggleFollowButton];
			if ( stateCopy.toggleFollowButton.some( el => el === action.toggleFollowButtonData ) ) {
				stateCopy.toggleFollowButton.forEach( (item, index) => {
					if( item === action.toggleFollowButtonData) {
						stateCopy.toggleFollowButton.splice(index,1);
						return stateCopy;
						}
					} );
			} else {
				stateCopy.toggleFollowButton.push(action.toggleFollowButtonData);
				return stateCopy;
			}
		default:
			return stateCopy;
	}
}


export const actionCreatorUserFollowed = ( index ) => {
	return { type: FOLLOW, id: index }
};
export const actionCreatorUserUnFollowed = ( index ) => {
	return { type: UNFOLLOW, id: index }
};
export const actionCreatorSetUsers = ( data ) => {
	return { type: SET_USERS, data: data }
};
export const actionCreatorSetCurrentPage = ( pageData, newCurrentPage ) => {
	return { type: SET_CURRENT_PAGE, pageData, newCurrentPage }
};
export const actionCreatorTogglePreloader = (togglePreloaderData) => {
	return { type: TOGGLE_PRELOADER, togglePreloaderData }
};
export const actionCreatorToggleFollowButton = (toggleFollowButtonData) => {
	return { type: TOGGLE_FOLLOW_BUTTON, toggleFollowButtonData }
};


export const setCurrentPageThunkCreator = (pageSize, newCurrentPage) => {
	return ( (dispatch) => {
		dispatch( actionCreatorTogglePreloader(true) );
		usersAPI.getUsers(pageSize, newCurrentPage).then( data => {
				dispatch( actionCreatorTogglePreloader(false) );
				dispatch( actionCreatorSetCurrentPage( data, newCurrentPage ) );
			});
	} );
}
export const getUsersThinkCreator = (pageSize, currentPage) => {
	return (dispatch) => {
		dispatch( actionCreatorTogglePreloader(true) );
		usersAPI.getUsers(pageSize, currentPage).then( data => {
				dispatch( actionCreatorTogglePreloader(false) );
				dispatch( actionCreatorSetUsers(data) );
			}); 
	};
}
export const followUserThunkCreator = (userID) => {
	return ( function (dispatch) {
		dispatch( actionCreatorToggleFollowButton(userID) );
		usersAPI.followUser_DAL_API(userID).then( resultCode => {
			if(resultCode === 0) {
				dispatch(actionCreatorUserFollowed( userID ) );
				dispatch( actionCreatorToggleFollowButton(userID) );
			}
				else {
					// You are have subscrubed, for this user
					dispatch( actionCreatorToggleFollowButton(userID) );
				}
		} )
	});
}
export const unfollowUserThunkCreator = (userID) => {
	return ( function (dispatch) {
		dispatch( actionCreatorToggleFollowButton(userID) );
		usersAPI.unfollowUser_DAL_API(userID).then( resultCode => {
			if(resultCode === 0) {
				dispatch( actionCreatorToggleFollowButton(userID) );
				dispatch(actionCreatorUserUnFollowed( userID ) );
			}
				else {
					// You are have not subscrubed, for this user
					dispatch( actionCreatorToggleFollowButton(userID) );
				}
		} )
	});
}

export default reducerUsers;