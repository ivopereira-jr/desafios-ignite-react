import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { Task } from '../Task';

import styles from './tasks.module.css';

export interface TaskProps {
	id: string;
	title: string;
	isCompleted: boolean;
}

export function Tasks() {
	const [tasks, setTasks] = useState<TaskProps[]>([]);
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const quantityTasksCreated = tasks.length;
	const toalTasksCompleted = tasks.filter(task => task.isCompleted).length;

	function handleCreteNewTask(event: FormEvent) {
		event.preventDefault();

		setTasks([
			...tasks,
			{
				id: crypto.randomUUID(),
				title: newTaskTitle,
				isCompleted: false
			}
		]);
		setNewTaskTitle('');
	}

	function handleNewTaskTitleChange(event: ChangeEvent<HTMLInputElement>) {
		setNewTaskTitle(event.target.value);
	}

	function handleToggleTaskCompleted(taskId: string) {
		const resultToggleTasksCompleted = tasks.map(task => {
			if (task.id === taskId) {
				return {
					...task,
					isCompleted: !task.isCompleted
				};
			}

			return task;
		});

		setTasks(resultToggleTasksCompleted);
	}

	function handleRemoveTask(taskId: string) {
		const resultFilterTasks = tasks.filter(task => task.id !== taskId);

		setTasks(resultFilterTasks);
	}

	return (
		<main className={styles.container}>
			<form onSubmit={handleCreteNewTask} className={styles.newTaskForm}>
				<input
					type="text"
					placeholder="Adicione um nova tarefa"
					value={newTaskTitle}
					onChange={handleNewTaskTitleChange}
					required
				/>
				<button type="submit">
					Criar <AiOutlinePlusCircle size={20} />
				</button>
			</form>

			<section className={styles.tasks}>
				<header className={styles.tasksHeader}>
					<div className={styles.tasksInfo}>
						<p>Tarefas criadas</p>
						<span>{quantityTasksCreated}</span>
					</div>

					<div className={styles.tasksInfo}>
						<p>Concluidas</p>
						<span>
							{toalTasksCompleted} de {quantityTasksCreated}
						</span>
					</div>
				</header>

				{tasks.map(task => (
					<Task
						task={task}
						onChangeIsCompleted={handleToggleTaskCompleted}
						onDeleteTask={handleRemoveTask}
					/>
				))}
			</section>
		</main>
	);
}
