import React from 'react';
import ReactDOM from 'react-dom/client';
import moment from 'moment';

import { App } from './App';

import 'moment/dist/locale/pt-br';

moment.locale('pt-br');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
