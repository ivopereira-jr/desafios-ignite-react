import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Router';

export function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				<Router />
			</ThemeProvider>
		</BrowserRouter>
	);
}
