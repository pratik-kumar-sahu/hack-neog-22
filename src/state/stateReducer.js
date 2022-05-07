import { work } from './actionTypes';

export const stateReducer = (state, action) => {
	console.log(state);
	switch (action.type) {
		case work.addWorkItems:
			return [...state, action.payload];

		default:
			return state;
	}
};
