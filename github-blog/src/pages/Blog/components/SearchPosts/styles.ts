import styled from 'styled-components';

export const SearchPostsContainer = styled.form`
	margin-top: 4.5rem;

	> input {
		width: 100%;
		padding: 0.75rem 1rem;
		margin-top: 0.75rem;
		color: ${({ theme }) => theme.colors['base-text']};
		background-color: ${({ theme }) => theme.colors['base-input']};
		border: 1px solid ${({ theme }) => theme.colors['base-border']};
		border-radius: 6px;
		font-weight: 400;
		line-height: 160%;
		transition: border-color 400ms ease;

		&::placeholder {
			color: ${({ theme }) => theme.colors['base-label']};
		}

		&:focus {
			border-color: ${({ theme }) => theme.colors['brand-blue']};
		}
	}
`;

export const SearchPostsTitle = styled.h2`
	color: ${({ theme }) => theme.colors['base-subtitle']};
	font-size: 1.125rem;
	line-height: 160%;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> span {
		color: ${({ theme }) => theme.colors['base-span']};
		font-size: 0.875rem;
		line-height: 160%;
		font-weight: 400;
	}
`;
