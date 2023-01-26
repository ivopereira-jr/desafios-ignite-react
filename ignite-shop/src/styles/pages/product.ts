import { styled } from '..';

export const ProductContainer = styled('main', {
	maxWidth: 1180,
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	alignItems: 'stretch', // isso faz as duas colunas esticarem para ter a mesma altura
	gap: '4rem',
	margin: '0 auto'
});

export const ImageContainer = styled('div', {
	width: '100%',
	maxWidth: 576,
	height: 656,
	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
	borderRadius: 8,
	padding: '0.25rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		objectFit: 'cover'
	}
});

export const ProductDetails = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	h1: {
		color: '$gray300',
		fontSize: '$2xl'
	},

	span: {
		color: '$green300',
		marginTop: '1rem',
		fontSize: '$2xl',
		display: 'block'
	},

	p: {
		color: '$gray300',
		marginTop: '2.5rem',
		fontSize: '$md',
		lineHeight: 1.6
	},

	button: {
		color: '$white',
		backgroundColor: '$green500',
		border: 0,
		borderRadius: 8,
		marginTop: 'auto',
		padding: '1.25rem',
		fontSize: '$md',
		fontWeight: 'bold',
		cursor: 'pointer',

		'&:disabled': {
			opacity: 0.6,
			cursor: 'not-allowed'
		},

		'&:not(:disabled):hover': {
			backgroundColor: '$green300'
		}
	}
});
