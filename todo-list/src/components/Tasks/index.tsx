import { BsCircle, BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

import styles from './tasks.module.css';

export function Tasks() {
	const tasks = [
		{
			id: crypto.randomUUID(),
			title: 'arrumar a cama',
			isCompleted: false
		},
		{
			id: crypto.randomUUID(),
			title: 'arrumar a cama',
			isCompleted: false
		},
		{
			id: crypto.randomUUID(),
			title: 'arrumar a cama',
			isCompleted: false
		},
		{
			id: crypto.randomUUID(),
			title: 'arrumar a cama',
			isCompleted: false
		},
		{
			id: crypto.randomUUID(),
			title: 'arrumar a cama',
			isCompleted: false
		}
	];

	return (
		<main className={styles.container}>
			<header className={styles.tasksHeader}>
				<div className={styles.tasksInfo}>
					<p>Tarefas criadas</p>
					<span>0</span>
				</div>

				<div className={styles.tasksInfo}>
					<p>Concluidas</p>
					<span>0 de 10</span>
				</div>
			</header>

			<section className={styles.tasks}>
				{tasks.map(task => (
					<div key={task.id} className={styles.task}>
						<button className={styles.buttonChangeIsCompletedTask}>
							{task.isCompleted ? (
								<BsFillCheckCircleFill size={20} />
							) : (
								<BsCircle size={20} />
							)}
						</button>

						<p>{task.title}</p>

						<button className={styles.buttonDeleteTask}>
							<TbTrash size={20} />
						</button>
					</div>
				))}
			</section>
		</main>
	);
}
