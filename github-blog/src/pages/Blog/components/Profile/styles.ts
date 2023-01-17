import styled from 'styled-components';

export const BaseCardStartPage = styled.div`
	width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme }) => theme.colors['base-profile']};
	padding: 2rem 2.5rem;
	margin-top: -5.375rem;
`;

export const ProfileContainer = styled(BaseCardStartPage)`
	display: flex;
	align-items: center;
	gap: 2rem;

	> img {
		width: 9.25rem;
		height: 9.25rem;
		border-radius: 8px;
		object-fit: cover;
	}
`;

export const ProfileContent = styled.div`
	width: 100%;
	height: 100%;

	> header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.5rem;

		h1 {
			color: ${({ theme }) => theme.colors['base-title']};
			font-size: 1.5rem;
			line-height: 130%;
			font-weight: 700;
		}
	}

	> p {
		font-size: 1rem;
		line-height: 160%;
		font-weight: 400;
	}
`;

export const ProfileInfos = styled.ul`
	margin-top: 1.5rem;
	display: flex;
	align-items: center;
	flex-grow: wrap;
	gap: 1.5rem;

	li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: ${({ theme }) => theme.colors['base-subtitle']};

		svg {
			color: ${({ theme }) => theme.colors['base-label']};
		}
	}
`;

export const BoxSkeleton = styled.div`
	width: 100%;
`;

export const WrapperSkeleton = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
