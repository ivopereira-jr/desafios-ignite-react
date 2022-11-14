import { BsCircle, BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

import { TaskProps } from '../Tasks';

import styles from './task.module.css';

interface TasksProps {
	task: TaskProps;
	onChangeIsCompleted: (taskId: string) => void;
	onDeleteTask: (taskId: string) => void;
}

export function Task({ task, onChangeIsCompleted, onDeleteTask }: TasksProps) {
	return (
		<div className={styles.task}>
			<button
				className={styles.buttonChangeIsCompletedTask}
				onClick={() => onChangeIsCompleted(task.id)}
			>
				{task.isCompleted ? (
					<BsFillCheckCircleFill size={20} />
				) : (
					<BsCircle size={20} />
				)}
			</button>

			<p className={task.isCompleted ? styles.taskTitleIsCompleted : ''}>
				{task.title}
			</p>

			<button
				className={styles.buttonDeleteTask}
				onClick={() => onDeleteTask(task.id)}
			>
				<TbTrash size={20} />
			</button>
		</div>
	);
}
