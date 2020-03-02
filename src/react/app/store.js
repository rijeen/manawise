import {createStore, combineReducers} from 'redux';

//Import default states
import { generalState, pageState, menuState, pagePasswordState } from "../includes/states";

//Custom states
const customState = (state = {}, action) => {
	switch (action.type) {
		case 'CUSTOM_1':
			return { };
		case 'CUSTOM_2':
			return { };
		default:
			return state;
	}
};

export const store = createStore(combineReducers({
	generalState,
	pageState,
	menuState,
	pagePasswordState
}), process.env.NODE_ENV == 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
