/*---------------------*/
import { usersAPI } from './../api/api.js';
// типы событий
const SET_USER_DATA = 'SET-USER-DATA';

export const setUserDataAC = (userId, email, login) => {
	return { type: SET_USER_DATA, data: {userId, email, login} }
};
export const getMeDataAuth = () => (dispatch) => {
	usersAPI.getMeData ().then( response => {
		if (response.resultCode == 0) {
			let { id, email, login } = response.data;
			dispatch( setUserDataAC ( id, email, login ) );
		}
	} )
}
/*---------------------*/

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuthToggle: false
};

const reducerAuth = (state = initialState, action) => {

	let stateCopy = {...state};

	switch(action.type) {
		case 'SET-USER-DATA':
			stateCopy.userId = action.data.userId;
			stateCopy.email = action.data.email;
			stateCopy.login = action.data.login;
			stateCopy.isAuthToggle = true;
			return stateCopy;
		default:
			return state;
	}
}


export default reducerAuth;