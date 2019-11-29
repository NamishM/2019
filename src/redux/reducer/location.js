import {
	LOCATION_CHANGE,
} from '../constants/ActionTypes';

const initialState = {
	currentPath: '',
	queryPath: '',
	previousPath: ''
};

export const location = (state = initialState, action) => {
	switch (action.type) {
		case LOCATION_CHANGE:
			return {
				...state,
				currentPath: action.payload.pathname,
				queryPath: action.payload.search,
				previousPath: state.currentPath,
			};
		default:
			return state;
	}
};
