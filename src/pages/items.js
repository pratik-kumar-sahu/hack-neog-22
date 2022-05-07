import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../state/stateContext';

export const Items = () => {
	const navigate = useNavigate();

	const { state } = useGlobalState();

	return (
		<div className='App flex-row'>
			<div className='main-container p-3'>
				<button
					className='iconBox flex-align-center cursor p-3 mb-3'
					onClick={() => navigate('/')}
				>
					<BsFillArrowLeftSquareFill className='iconBox_icon mr-3' />
					<p>Home</p>
				</button>
			</div>
			<div className='side-container p-3'>
				<div className='sprint-group'>
					{state[0].workName ? (
						<p title='Click to expand group'>{state[0].workName}</p>
					) : (
						<h4>No Work Groups Added</h4>
					)}
				</div>
			</div>
		</div>
	);
};
