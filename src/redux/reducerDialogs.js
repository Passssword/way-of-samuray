/*---------------------*/
// типы событий
const ADD_MESSEGE_DIALOGS = 'ADD-MESSEGE-DIALOGS';

/*---------------------*/

function _addMessegeDialogs(messegeData, state) {
	let newMessage = {
		id: 5,
		message: messegeData,
		};
	state.messagesData.push(newMessage);
	return state;
}



let initialState = {
	dialogUsers: 
		[
		  {id: 0, dialogUser: "Nike"},
		  {id: 1, dialogUser: "Dimon"},
		  {id: 2, dialogUser: "SuperUser"},
		  {id: 3, dialogUser: "Yana"},
		  {id: 4, dialogUser: "George"},
		],
	messagesData: 
		[
		  {id: 0, message: "Hi!"},
		  {id: 1, message: "Yo"},
		  {id: 2, message: "What's up?"},
		  {id: 3, message: "How are you?"},
		  {id: 4, message: "Call me."}
		]
};
const reducerDialogs = (state = initialState, action) => {
	let stateCopy = {...state};
	switch(action.type) {
		case 'ADD-MESSEGE-DIALOGS':
			stateCopy.messagesData = [...state.messagesData];
			_addMessegeDialogs(action.messegeDialogs, stateCopy)
			return stateCopy;
		default:
			return state;
	}
}

export const actionCreatorAddMessegeDialogs = (messege) => {
	return { type: ADD_MESSEGE_DIALOGS, messegeDialogs: messege }
};

export default reducerDialogs;