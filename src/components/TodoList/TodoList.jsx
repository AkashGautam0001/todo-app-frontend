import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList() {
	const { list, setList } = useContext(TodoContext);

	function onFinished(todo, isFinished) {
		const updatedList = list.map((t) => {
			if (t.id == todo.id) {
				todo.finished = isFinished;
			}
			return t;
		});
		setList(updatedList);
	}

	function onDelete(todo) {
		const updatedList = list.filter((t) => t.id != todo.id);
		setList(updatedList);
	}

	function oneEdit(todo, todoText) {
		const updatedList = list.map((t) => {
			if (t.id == todo.id) {
				todo.todoData = todoText;
			}
			return t;
		});
		setList(updatedList);
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
