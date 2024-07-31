import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducerDialogs from './reducerDialogs.js';
import reducerProfile from './reducerProfile.js';
import reducerUsers from './reducerUsers.js';
import reducerAuth from './reducerAuth.js';

let reducers = combineReducers({
	profilePage: reducerProfile,
	dialog: reducerDialogs,
	usersPage: reducerUsers,
	auth: reducerAuth
});

const store = createStore( reducers, applyMiddleware(thunk) );

export default store;