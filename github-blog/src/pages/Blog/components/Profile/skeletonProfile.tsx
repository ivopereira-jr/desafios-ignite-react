import Skeleton from 'react-loading-skeleton';

import { SkeletonThemeDefault } from '../../../../components/SkeletonThemeDefault';

import * as S from './styles';

export function SkeletonProfile() {
	return (
		<SkeletonThemeDefault>
			<Skeleton width={148} height={148} />
			<S.WrapperSkeleton>
				<S.BoxSkeleton>
					<Skeleton height={32} style={{ marginBottom: '0.75rem' }} />
				</S.BoxSkeleton>
				<S.BoxSkeleton>
					<Skeleton height={22} count={2} style={{ marginBottom: '4px' }} />
				</S.BoxSkeleton>
				<S.BoxSkeleton>
					<Skeleton height={18} style={{ marginTop: '1.5rem' }} />
				</S.BoxSkeleton>
			</S.WrapperSkeleton>
		</SkeletonThemeDefault>
	);
}
