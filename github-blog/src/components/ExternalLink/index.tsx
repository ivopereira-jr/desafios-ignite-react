import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';
import { ComponentProps } from 'react';

type ExternalLinkProps = ComponentProps<typeof S.ExternalLinkContainer> & {
	text: string;
};

export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
	return (
		<S.ExternalLinkContainer target="_blank" {...rest}>
			{text}
			<FontAwesomeIcon icon={faUpRightFromSquare} />
		</S.ExternalLinkContainer>
	);
}
