import styled from 'styled-components';

export const BlogContainer = styled.div`
	width: 100%;
	height: auto;
	padding-bottom: 5rem;
`;

export const PostsContainer = styled.section`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
	gap: 2rem;
`;
