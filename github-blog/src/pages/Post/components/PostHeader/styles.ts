import styled from 'styled-components';
import {
	BaseCardStartPage,
	BaseListInfos
} from '../../../Blog/components/Profile/styles';

export const PostHeaderContainer = styled(BaseCardStartPage)``;

export const NavLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const PostHeaderTitle = styled.h2`
	color: ${({ theme }) => theme.colors['base-title']};
	margin-top: 1.25rem;
	font-size: 1.5rem;
	line-height: 130%;
	font-weight: 700;
`;

export const PostHeaderInfos = styled(BaseListInfos)`
	margin-top: 0.5rem;
`;

export const WrapperSkeletonPostHeade = styled(BaseCardStartPage)``;

export const BoxSkeleton = styled.div`
	width: 100%;
`;
