import * as S from './styles';

import blogLogo from '../../assets/Logo.svg';

export function Header() {
	return (
		<S.HeaderContainer>
			<img src={blogLogo} alt="" />
		</S.HeaderContainer>
	);
}
