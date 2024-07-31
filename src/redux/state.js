/* state - состояние */
// В контексте текущего использования это состояние данных

import reducerDialogs from './reducerDialogs.js';
import reducerProfile from './reducerProfile.js';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 0, nickName: "Vlad", message: "Yo!", messageDate: "12.05.2006" },
				{ id: 1, nickName: "Den", message: "Smile", messageDate: "25.12.2010" },
				{ id: 2, nickName: "George", message: "somethink text...", messageDate: "16.01.2021" }
			],
			postStateOnChange: "send message..."
		},
		dialog: {
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
		},
		sideBar: {}
	},
	getState(){
		return this._state;
	},
	reRender() {},
	subscribe(observer) {
		this.reRender = observer;
	},
	dispatch(action) {
		this._state.profilePage = reducerProfile(this._state.profilePage, action);
		this._state.dialog = reducerDialogs(this._state.dialog, action);
		this.reRender();
	}
}

/*---------------------*/


// Делаем доступным глобально объект store, т.е. мы можем вызвать его из консоли окна браузера.
// window.store = store;
export default store;