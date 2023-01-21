import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faCalendar,
	faChevronLeft,
	faComment
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { relativeDateFormatter } from '../../../../utils/formatterDate';

import { PostProps } from '../..';

import { ExternalLink } from '../../../../components/ExternalLink';

import * as S from './styles';

interface PostHeaderProps {
	postInfos: PostProps;
}

export function PostHeader({ postInfos }: PostHeaderProps) {
	const navigate = useNavigate();

	const publishedDateRelativeToNow = relativeDateFormatter(
		postInfos.created_at
	);

	function handleGoBack() {
		navigate(-1);
	}

	return (
		<S.PostHeaderContainer>
			<S.NavLinks>
				<ExternalLink
					as="button"
					text="voltar"
					icon={<FontAwesomeIcon icon={faChevronLeft} />}
					variant="iconLeft"
					onClick={handleGoBack}
				/>
				<ExternalLink
					text="ver no github"
					href={postInfos?.html_url}
					target="_blank"
				/>
			</S.NavLinks>

			<S.PostHeaderTitle>{postInfos?.title}</S.PostHeaderTitle>

			<S.PostHeaderInfos>
				<li>
					<FontAwesomeIcon icon={faGithub} />
					{postInfos?.user?.login}
				</li>

				<li>
					<FontAwesomeIcon icon={faCalendar} />
					{publishedDateRelativeToNow}
				</li>

				<li>
					<FontAwesomeIcon icon={faComment} />
					{postInfos?.comments} comentários
				</li>
			</S.PostHeaderInfos>
		</S.PostHeaderContainer>
	);
}
