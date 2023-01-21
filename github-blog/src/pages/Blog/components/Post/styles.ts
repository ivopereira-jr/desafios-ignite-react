import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostContainer = styled(Link)`
	max-height: 16.25rem;
	background-color: ${({ theme }) => theme.colors['base-post']};
	border-radius: 0.625rem;
	padding: 2rem;
	border: 0.125rem solid transparent;
	transition: border-color 400ms ease;

	&:hover {
		border-color: ${({ theme }) => theme.colors['base-label']};
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h2 {
		color: ${({ theme }) => theme.colors['base-title']};
		font-size: 20px;
		line-height: 160%;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		inline-size: 80%;
		overflow-wrap: break-word;
	}

	span {
		color: ${({ theme }) => theme.colors['base-span']};
		font-size: 14px;
		line-height: 160%;
		font-weight: 400;
	}

	p {
		color: ${({ theme }) => theme.colors['base-text']};
		margin-top: 20px;
		line-height: 160%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
	}
`;

export const BoxSkeletonPost = styled.div`
	width: 100%;
	height: 260px;
	padding: 2rem;

	border-radius: 0.625rem;
	background-color: ${({ theme }) => theme.colors['base-profile']};
`;
