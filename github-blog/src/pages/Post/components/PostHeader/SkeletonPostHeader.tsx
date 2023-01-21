import Skeleton from 'react-loading-skeleton';

import { SkeletonThemeDefault } from '../../../../components/SkeletonThemeDefault';

import * as S from './styles';

export function SkeletonPostHeader() {
	return (
		<SkeletonThemeDefault>
			<S.WrapperSkeletonPostHeade>
				<S.BoxSkeleton>
					<Skeleton height={18} style={{ marginBottom: '1.25rem' }} />
				</S.BoxSkeleton>
				<S.BoxSkeleton>
					<Skeleton height={38} />
				</S.BoxSkeleton>
				<S.BoxSkeleton>
					<Skeleton height={16} style={{ marginTop: '1.5rem' }} />
				</S.BoxSkeleton>
			</S.WrapperSkeletonPostHeade>
		</SkeletonThemeDefault>
	);
}
