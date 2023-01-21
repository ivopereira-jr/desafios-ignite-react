import Skeleton from 'react-loading-skeleton';

import { SkeletonThemeDefault } from '../../../../components/SkeletonThemeDefault';

import * as S from './styles';

export function SkeletonPost() {
	return (
		<SkeletonThemeDefault>
			<S.BoxSkeletonPost>
				<Skeleton height={40} />
				<Skeleton height={20} style={{ marginTop: '2rem' }} />
				<Skeleton height={20} style={{ marginTop: '1rem' }} />
			</S.BoxSkeletonPost>
			<S.BoxSkeletonPost>
				<Skeleton height={40} />
				<Skeleton height={20} style={{ marginTop: '2rem' }} />
				<Skeleton height={20} style={{ marginTop: '1rem' }} />
			</S.BoxSkeletonPost>
		</SkeletonThemeDefault>
	);
}
