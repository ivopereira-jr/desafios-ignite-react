import { useState, FormEvent, ChangeEvent } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import todoLogo from '../../assets/logo.svg';

import styles from './haeder.module.css';

export function Header() {
	const [newTaskTitle, setNewTaskTitle] = useState('');

	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		setNewTaskTitle('');
	}

	function onChangeTaskTitle(event: ChangeEvent<HTMLInputElement>) {
		setNewTaskTitle(event.target.value);
	}

	return (
		<header className={styles.container}>
			<img
				src={todoLogo}
				alt="Logo marca com um foguete virado para cima e um texto escrito todo "
				className={styles.logo}
			/>

			<form onSubmit={handleSubmit} className={styles.newTaskForm}>
				<input
					type="text"
					placeholder="Adicione um nova tarefa"
					value={newTaskTitle}
					onChange={onChangeTaskTitle}
				/>
				<button>
					Criar <AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
}
