import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import { Toaster } from 'react-hot-toast';

import { StateContextProvider } from './state/stateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<StateContextProvider>
			<Toaster position='top-center' reverseOrder={false} />
			<App />
		</StateContextProvider>
	</React.StrictMode>
);
