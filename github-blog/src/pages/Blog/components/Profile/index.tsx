import { useCallback, useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { api } from '../../../../lib/axios';

import { ExternalLink } from '../../../../components/ExternalLink';
import { SkeletonProfile } from './skeletonProfile';

import * as S from './styles';

interface ProfileDataProps {
	avatar_url: string;
	bio: string;
	company?: string;
	login: string;
	name: string;
	html_url: string;
	followers: number;
}

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

export function Profile() {
	const [isLoading, setIsLoading] = useState(true);
	const [profileData, setProfileData] = useState<ProfileDataProps>(
		{} as ProfileDataProps
	);

	const getProfileData = useCallback(async () => {
		try {
			const response = await api.get(`/users/${USERNAME}`);

			setProfileData(response.data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [profileData]);

	useEffect(() => {
		getProfileData();
	}, []);

	return (
		<S.ProfileContainer>
			{isLoading ? (
				<SkeletonProfile />
			) : (
				<>
					<img
						src={profileData.avatar_url}
						alt={`imagem de ${profileData.name}`}
					/>

					<S.ProfileContent>
						<header>
							<h1>{profileData.name}</h1>
							<ExternalLink
								text="github"
								href={profileData.html_url}
								target="_blank"
							/>
						</header>

						<p>{profileData.bio}</p>

						<S.ProfileInfos>
							<li>
								<FontAwesomeIcon icon={faGithub} />
								{profileData.login}
							</li>

							{profileData?.company && (
								<li>
									<FontAwesomeIcon icon={faBuilding} />
									{profileData?.company}
								</li>
							)}

							<li>
								<FontAwesomeIcon icon={faUserGroup} />
								{profileData.followers} seguidores
							</li>
						</S.ProfileInfos>
					</S.ProfileContent>
				</>
			)}
		</S.ProfileContainer>
	);
}
