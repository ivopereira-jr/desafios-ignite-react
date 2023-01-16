import styled from 'styled-components';

export const LayoutContainer = styled.div`
	> main {
		width: 100%;
		max-width: 54rem;
		height: auto;
		margin: 0 auto;

		@media (max-width: 1280px) {
			padding: 0 1rem;
		}
	}
`;
