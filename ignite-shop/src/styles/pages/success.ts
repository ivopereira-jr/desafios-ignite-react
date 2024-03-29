import { styled } from '..';

export const SuccessContainer = styled('main', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	margin: '0 auto',
	height: 656,

	h2: {
		fontSize: '$2xl',
		color: '$gray100'
	},

	p: {
		fontSize: '$xl',
		lineHeight: 1.6,
		color: '$gray300',
		maxWidth: 560,
		textAlign: 'center',
		marginTop: '2rem'
	},

	a: {
		marginTop: '5rem',
		display: 'block',
		fontSize: '$lg',
		fontWeight: 'bold',
		color: '$green500',
		textDecoration: 'none',

		'&:hover': {
			color: '$green300'
		}
	}
});

export const ImagesContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	marginTop: '6.5rem',
	marginBottom: '3rem',

	'div + div': {
		marginLeft: '-3.25rem'
	}
});

export const ImageContainer = styled('div', {
	width: 140,
	height: 140,
	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
	borderRadius: '50%',
	padding: '0.25rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		objectFit: 'cover'
	}
});
