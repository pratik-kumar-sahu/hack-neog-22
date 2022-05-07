import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputForm } from '../components/inputForm';

export const Home = () => {
	const navigate = useNavigate();

	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<div className='home'>
				<div className='home_add flex-j-a-center cursor' onClick={() => setShowForm(true)}>
					<h2>Add New Work</h2>
				</div>
				<div
					onClick={() => navigate('/items')}
					className='home_view flex-j-a-center cursor'
				>
					<h2>View Work Items</h2>
				</div>
			</div>
			<InputForm handleShowForm={{ showForm, setShowForm }} />
		</>
	);
};
