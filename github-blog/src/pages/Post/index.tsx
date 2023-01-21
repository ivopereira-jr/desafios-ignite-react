import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';

import { PostsProps } from '../Blog';
import { PostContent } from './components/PostContent';
import { PostHeader } from './components/PostHeader';
import { SkeletonPagePost } from './components/SkeletonPagePost';

export interface PostProps extends PostsProps {
	comments: number;
	user: {
		login: string;
	};
}

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const ISSUESREPONAME = import.meta.env.VITE_GITHUB_ISSUESREPONAME;

export function Post() {
	const [postInfos, setPostsInfos] = useState<PostProps>({} as PostProps);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const { number } = useParams();

	const getPostInfos = useCallback(async () => {
		try {
			const response = await api.get(
				`/repos/${USERNAME}/${ISSUESREPONAME}/issues/${number}`
			);

			setPostsInfos(response.data);
		} finally {
			setIsLoading(false);
		}
	}, [postInfos]);

	useEffect(() => {
		getPostInfos();
	}, []);

	return (
		<>
			{isLoading ? (
				<SkeletonPagePost />
			) : (
				<>
					<PostHeader postInfos={postInfos} />
					<PostContent content={postInfos.body} />
				</>
			)}
		</>
	);
}
