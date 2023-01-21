import styled from 'styled-components';

import headerBg from '../../assets/headerBackground.png';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 18.5rem;
	background: url(${headerBg}) no-repeat center / cover;
	display: flex;
	justify-content: center;

	img {
		width: 9.25rem;
		height: 6.125rem;
		object-fit: cover;
		margin-top: 4rem;
	}
`;
