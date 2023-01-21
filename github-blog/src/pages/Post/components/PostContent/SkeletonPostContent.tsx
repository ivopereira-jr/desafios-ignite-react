import Skeleton from 'react-loading-skeleton';

import { SkeletonThemeDefault } from '../../../../components/SkeletonThemeDefault';

import * as S from './styles';

export function SkeletonPostContent() {
	return (
		<SkeletonThemeDefault>
			<S.WrapperSkeletonPostContent>
				<S.BoxSkeleton>
					<Skeleton height={14} count={4} style={{ marginBottom: '.625rem' }} />
				</S.BoxSkeleton>
				<S.BoxSkeleton>
					<Skeleton
						width="30%"
						height={28}
						style={{ margin: '1.2rem 0 1.125rem' }}
					/>
					<Skeleton height={14} count={4} style={{ marginBottom: '.625rem' }} />
				</S.BoxSkeleton>
			</S.WrapperSkeletonPostContent>
		</SkeletonThemeDefault>
	);
}
