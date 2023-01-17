import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { PostProps } from '../..';

import * as S from './styles';

interface IPost {
	post: PostProps;
}

export function Post({ post }: IPost) {
	const publishedDateRelativeToNow = formatDistanceToNow(
		new Date(post.created_at),
		{
			locale: ptBR,
			addSuffix: true
		}
	);

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
