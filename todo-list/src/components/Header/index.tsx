import todoLogo from '../../assets/logo.svg';

import styles from './haeder.module.css';

export function Header() {
	return (
		<header className={styles.container}>
			<img
				src={todoLogo}
				alt="Logo marca com um foguete virado para cima e um texto escrito todo "
				className={styles.logo}
			/>
		</header>
	);
}
