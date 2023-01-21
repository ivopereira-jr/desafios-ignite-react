import { PostsProps } from '../..';
import { relativeDateFormatter } from '../../../../utils/formatterDate';

import * as S from './styles';

interface IPost {
	post: PostsProps;
}

export function Post({ post }: IPost) {
	const publishedDateRelativeToNow = relativeDateFormatter(post.created_at);

	return (
		<S.PostContainer to={`/post/${post.number}`}>
			<div>
				<h2>{post.title}</h2>
				<span>{publishedDateRelativeToNow}</span>
			</div>

			<p>{post.body}</p>
		</S.PostContainer>
	);
}
