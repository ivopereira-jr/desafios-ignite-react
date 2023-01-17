import { useCallback, useEffect, useState } from 'react';
import { api } from '../../lib/axios';

import { Profile } from './components/Profile';
import { SearchPosts } from './components/SearchPosts';
import { Post } from './components/Post';
import { SkeletonPost } from './components/Post/SkeletonPost';

import * as S from './styles';

export interface PostProps {
	title: string;
	body: string;
	number: number;
	html_url: string;
	created_at: string;
}

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const ISSUESREPONAME = import.meta.env.VITE_GITHUB_ISSUESREPONAME;

export function Blog() {
	const [posts, searchPosts] = useState<PostProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getPosts = useCallback(
		async (query: string = '') => {
			try {
				const response = await api.get(
					`/search/issues?q=${query}%20repo:${USERNAME}/${ISSUESREPONAME}`
				);

				searchPosts(response.data.items);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		},
		[posts]
	);

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<S.BlogContainer>
			<Profile />
			<SearchPosts postsLength={posts.length} getPosts={getPosts} />
			<S.PostsContainer>
				{isLoading ? (
					<SkeletonPost />
				) : (
					posts.map(post => {
						return <Post key={post.number} post={post} />;
					})
				)}
			</S.PostsContainer>
		</S.BlogContainer>
	);
}
