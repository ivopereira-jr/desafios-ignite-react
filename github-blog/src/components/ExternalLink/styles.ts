import styled from 'styled-components';

export const BaseLink = styled.a`
	color: ${({ theme }) => theme.colors['brand-blue']};
	font-size: 0.75rem;
	line-height: 160%;
	font-weight: 700;
	text-transform: uppercase;
	padding-bottom: 0.125rem;

	svg {
		width: 0.75rem;
		height: 0.75rem;
	}
`;

export const ExternalLinkContainer = styled(BaseLink)`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
