import { styled } from '../../styles';

export const CartButtonContainer = styled('button', {
	width: '3rem',
	height: '3rem',
	color: '$gray500',
	backgroundColor: '$gray800',
	borderRadius: 6,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',

	'&:disabled': {
		opacity: 0.6,
		cursor: 'not-allowed'
	},

	span: {
		width: '1.5rem',
		height: '1.5rem',
		color: '$white',
		background: '$green500',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '0.875rem',
		fontWeight: 'bold',
		position: 'absolute',
		top: 'calc(-1.5rem / 2)',
		right: 'calc(-1.5rem / 2)',
		outline: '3px solid $gray900'
	},

	variants: {
		color: {
			gray: {
				background: '$gray800',
				color: '$gray500'
			},
			green: {
				background: '$green500',
				color: '$white',

				'&:not(:disabled):hover': {
					backgroundColor: '$green300'
				}
			}
		},
		size: {
			medium: {
				width: '3rem',
				height: '3rem',

				svg: {
					fontSize: 24
				}
			},
			large: {
				width: '3.5rem',
				height: '3.5rem',

				svg: {
					fontSize: 32
				}
			}
		}
	},

	defaultVariants: {
		color: 'gray',
		size: 'medium'
	}
});
