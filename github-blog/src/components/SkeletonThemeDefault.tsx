import { ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTheme } from 'styled-components';

interface SkeletonThemeDefaultProps {
	children: ReactNode;
}

export function SkeletonThemeDefault({ children }: SkeletonThemeDefaultProps) {
	const { colors } = useTheme();

	return (
		<SkeletonTheme
			baseColor={colors['base-border']}
			highlightColor={colors['base-label']}
		>
			{children}
		</SkeletonTheme>
	);
}
