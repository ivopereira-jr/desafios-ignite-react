import { Link } from 'react-router-dom';

import blogLogo from '../../assets/Logo.svg';

import * as S from './styles';

export function Header() {
	return (
		<S.HeaderContainer>
			<Link to="/">
				<img src={blogLogo} alt="" />
			</Link>
		</S.HeaderContainer>
	);
}
