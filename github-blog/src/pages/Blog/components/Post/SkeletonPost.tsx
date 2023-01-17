import Skeleton from 'react-loading-skeleton';

import { SkeletonThemeDefault } from '../../../../components/SkeletonThemeDefault';

import * as S from './styles';

export function SkeletonPost() {
	return (
		<SkeletonThemeDefault>
			<S.BoxSkeletonPost>
				<Skeleton height="100%" />
			</S.BoxSkeletonPost>
			<S.BoxSkeletonPost>
				<Skeleton height="100%" />
			</S.BoxSkeletonPost>
		</SkeletonThemeDefault>
	);
}
