import { SkeletonPostContent } from './PostContent/SkeletonPostContent';
import { SkeletonPostHeader } from './PostHeader/SkeletonPostHeader';

export function SkeletonPagePost() {
	return (
		<div>
			<SkeletonPostHeader />
			<SkeletonPostContent />
		</div>
	);
}
