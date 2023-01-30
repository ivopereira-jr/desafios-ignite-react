import * as Dialog from '@radix-ui/react-dialog';

import { styled } from '../../styles';

export const CartContent = styled(Dialog.Content, {
	position: 'fixed',
	top: 0,
	right: 0,
	bottom: 0,
	width: '30rem',
	background: '$gray800',
	padding: '3rem',
	paddingTop: '4.5rem',
	boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
	display: 'flex',
	flexDirection: 'column',

	section: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1.5rem',
		flex: 1,
		overflowY: 'auto',

		h2: {
			color: '$gray100',
			fontSize: '$lg',
			fontWeight: 700,
			marginBottom: '2rem'
		}
	}
});

export const TextCartEmpty = styled('p', {
	fontSize: '$lg',
	textAlign: 'center',
	marginTop: '2rem'
});

export const CartButtonClose = styled(Dialog.Close, {
	color: '$gray500',
	background: 'none',
	border: 'none',
	position: 'absolute',
	top: '1.75rem',
	right: '1.75rem'
});

export const CardProduct = styled('div', {
	width: '100%',
	height: '5.8125rem',
	display: 'flex',
	alignItems: 'center',
	gap: '1.25rem'
});

export const CardProductImage = styled('div', {
	width: '6.3125rem',
	height: '5.8125rem',
	background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 8,

	img: {
		objectFit: 'cover'
	}
});

export const CardProductContent = styled('div', {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',

	p: {
		color: '$gray300',
		fontSize: '$md'
	},

	strong: {
		marginTop: 4,
		fontSize: '$md',
		fontWeight: 700
	},

	button: {
		width: 'max-content',
		marginTop: 'auto',
		background: 'none',
		border: 'none',
		color: '$green500',
		fontSize: '1rem',
		fontWeight: 700
	}
});

export const CartSummary = styled('footer', {
	display: 'flex',
	flexDirection: 'column',
	marginTop: 'auto',

	button: {
		width: '100%',
		height: '4.3125rem',
		color: '$white',
		background: '$green500',
		border: 'none',
		borderRadius: 8,
		fontSize: '$md',
		fontWeight: 700,
		transition: 'background-color 400ms ease',

		'&:disabled': {
			opacity: 0.6,
			cursor: 'not-allowed'
		},

		'&:not(:disabled):hover': {
			backgroundColor: '$green300'
		}
	}
});

export const CartSummaryContent = styled('section', {
	marginBottom: 55,
	display: 'flex',
	flexDirection: 'column',
	gap: 8,

	div: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		p: {
			fontSize: '$md',
			color: '$gray300'
		},

		'&:last-child': {
			fontWeight: 'bold',

			span: {
				fontSize: '$md'
			},

			p: {
				color: '$gray100',
				fontSize: '$xl'
			}
		}
	}
});
