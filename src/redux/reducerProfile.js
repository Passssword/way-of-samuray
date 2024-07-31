/*---------------------*/
// типы событий
const ADD_POST_PROFILE = 'ADD-POST-PROFILE';
const CHANGE_TEXT_PROFILE = 'CHANGE-TEXT-PROFILE';
const ADD_PROFILE_DATA = 'ADD-PROFILE-DATA';

export const actionCreatorChangeTextProfile = (textChange) => {
	return { type: CHANGE_TEXT_PROFILE, textOnChange: textChange }
};
export const actionCreatorAddPostProfile = () => {
	return { type: ADD_POST_PROFILE }
};
export const addProfileDataAC = (data) => {
	return { type: ADD_PROFILE_DATA, data }
};
/*---------------------*/

function _addPost(state) {
	let newMessage = {
		id: 3,
		nickName: "Guest",
		message: state.postStateOnChange,
		messageDate: "31.08.2021"
		};
	state.posts.push(newMessage);
	state.postStateOnChange = '';
	return state;
}
//

let initialState = {
	posts: [
		{ id: 0, nickName: "Vlad", message: "Yo!", messageDate: "12.05.2006" },
		{ id: 1, nickName: "Den", message: "Smile", messageDate: "25.12.2010" },
		{ id: 2, nickName: "George", message: "somethink text...", messageDate: "16.01.2021" }
	],
	postStateOnChange: "send message...",
	profileData: {
		aboutMe: null,
		contacts: null,
		fullName: null,
		lookingForAJob: false,
		lookingForAJobDescription: null,
		photos: {small: null, large: null}
	}
};

const reducerProfile = (state = initialState, action) => {

	let stateCopy = {...state};

	switch(action.type) {
		case 'CHANGE-TEXT-PROFILE':
			stateCopy.postStateOnChange = action.textOnChange
			return stateCopy;
		case 'ADD-POST-PROFILE':
			stateCopy.posts = [...state.posts];
			return _addPost(stateCopy);
		case 'ADD-PROFILE-DATA':
			stateCopy.profileData = action.data;
			stateCopy.profileData.photos = {...action.data.photos}
			return stateCopy;
		default:
			return state;
	}
}


export default reducerProfile;