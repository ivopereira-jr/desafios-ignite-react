import styled from 'styled-components';

export const PostContentContainer = styled.section`
	padding: 2.5rem 2rem 4rem 2rem;
	margin-bottom: 6.25rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	img {
		width: 100%;
		object-fit: cover;
		margin: 2rem 0;
	}

	h1,
	h2,
	h3,
	h4,
	a {
		color: ${({ theme }) => theme.colors['brand-blue']};
	}

	& h1,
	h2,
	h3,
	h4 + p {
		margin: 2rem 0 0.75rem;
	}

	p {
		line-height: 160%;
	}

	ul {
		list-style: inherit;
		padding-left: 1.5rem;
	}

	pre {
		background: ${({ theme }) => theme.colors['base-post']};
		padding: 1rem;
		> div {
			background: none !important;
			padding: 0 !important;
			margin: 0 !important;
			code {
				font-family: 'FiraCode', monospace !important;
				line-height: 160% !important;
			}
		}
	}
`;

export const WrapperSkeletonPostContent = styled.div`
	padding: 2.5rem;
`;

export const BoxSkeleton = styled.div`
	width: 100%;
`;
