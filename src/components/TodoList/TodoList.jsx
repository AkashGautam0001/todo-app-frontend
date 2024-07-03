import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

function TodoList({ editTodo, deleteTodo, todoFinished }) {
	const list = useSelector((state) => state.todo);

	function onFinished(todo, isFinished) {
		todoFinished(todo, isFinished);
	}

	function onDelete(todo) {
		deleteTodo(todo);
	}

	function oneEdit(todo, todoText) {
		editTodo(todo, todoText);
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "12px",
			}}
		>
			{list.length >= 0 &&
				list.map((todo) => (
					<Todo
						key={todo.id}
						id={todo.id}
						todoData={todo.todoData}
						isFinished={todo.finished}
						changeFinished={(isFinished) =>
							onFinished(todo, isFinished)
						}
						onDelete={() => onDelete(todo)}
						onEdit={(todoText) => oneEdit(todo, todoText)}
					/>
				))}
		</div>
	);
}

export default TodoList;
