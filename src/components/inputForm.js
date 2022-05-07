import { useState } from 'react';
import toast from 'react-hot-toast';
import { work } from '../state/actionTypes';
import { useGlobalState } from '../state/stateContext';

const initialState = {
	workName: '',
	startDate: '',
	endDate: '',
	sprintCount: 1,
	teamMembers: ''
}

export const InputForm = (props) => {
	const [formState, setFormState] = useState(initialState);

	const { showForm, setShowForm } = props.handleShowForm;
	const { dispatch } = useGlobalState();

	const handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormState({ ...formState, [name]: value });
	};

	const checkForEmptyFields = (formState) => {
		const { workName, startDate, endDate, sprintCount, teamMembers } = formState;
		if (!workName.trim() || !startDate.trim() || !endDate.trim() || !teamMembers.trim()) {
			toast.error('Please fill all the fields');
			return false;
		} else if (sprintCount <= 0) {
			toast.error('sprint count must be greator than 0');
			return false;
		} else {
			toast.success('Added work group successfully');
			return true;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (checkForEmptyFields(formState)) {
			setShowForm(false);
			setFormState(initialState);
			dispatch({ type: work.addWorkItems, payload: formState });
		}
	};

	return (
		<div style={{ display: showForm ? 'block' : 'none' }} className='formContainer'>
			<div className='formContainer_form flex-j-a-center'>
				<form className='inputForm flex-column'>
					<input
						className='inputForm_inputField'
						type='text'
						name='workName'
						title='Enter Work Name'
						placeholder='Enter Work Name'
						value={formState.workName}
						onChange={handleInputChange}
					/>
					<input
						className='inputForm_inputField'
						type='date'
						name='startDate'
						title='Select Start Date'
						value={formState.startDate}
						onChange={handleInputChange}
					/>
					<input
						className='inputForm_inputField'
						type='date'
						name='endDate'
						title='Select End Date'
						value={formState.endDate}
						onChange={handleInputChange}
					/>
					<input
						className='inputForm_inputField'
						type='number'
						name='sprintCount'
						title='Enter in how many sprint you want to divide the work'
						placeholder='Enter in how many sprint you want to divide the work'
						value={formState.sprintCount}
						onChange={handleInputChange}
					/>
					<input
						className='inputForm_inputField'
						type='text'
						name='teamMembers'
						title='Enter Team Members Name with comma'
						placeholder='Enter Team Members Name with comma'
						value={formState.teamMembers}
						onChange={handleInputChange}
					/>
					<div className='flex-align-center'>
						<button
							type='button'
							className='inputForm_close cursor mr-1'
							onClick={() => setShowForm(false)}
						>
							Close
						</button>
						<button
							type='submit'
							className='inputForm_submit cursor ml-1'
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
