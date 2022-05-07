import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Items } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/items' element={<Items />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
