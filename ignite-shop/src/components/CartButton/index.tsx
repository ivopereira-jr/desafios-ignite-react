import { Handbag } from 'phosphor-react';
import { ComponentProps } from 'react';

import { CartButtonContainer } from './styles';

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
	quantity?: number;
};

export function CartButton({ quantity = 0, ...rest }: CartButtonProps) {
	return (
		<CartButtonContainer {...rest}>
			<Handbag size={24} weight="bold" />
			{quantity > 0 && <span>{quantity}</span>}
		</CartButtonContainer>
	);
}
