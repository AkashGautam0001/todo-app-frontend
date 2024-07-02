import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList() {
	const { list } = useContext(TodoContext);
	const { dispatch } = useContext(TodoDispatchContext);

	function onFinished(todo, isFinished) {
		dispatch({
			type: "finish_todo",
			payload: { todo, isFinished: isFinished },
		});
	}

	function onDelete(todo) {
		dispatch({ type: "delete_todo", payload: { todo } });
	}

	function oneEdit(todo, todoText) {
		dispatch({ type: "edit_todo", payload: { todo, todoText } });
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
