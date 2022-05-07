import { createContext, useContext, useReducer } from 'react';
import { stateReducer } from './stateReducer';

const StateContext = createContext();

export const useGlobalState = () => useContext(StateContext);

export const StateContextProvider = ({ children }) => {
	const initialState = [
		{
			_id: '',
			workName: '',
			sprintCount: '',
			teamMembers: [],
			workItems: [],
			startDate: '',
			endDate: ''
		}
	];

	const [state, dispatch] = useReducer(stateReducer, initialState);

	return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};
