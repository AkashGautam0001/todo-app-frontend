import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
function App() {
	const [list, setList] = useState([
		{ id: 1, todoData: "todo 1", finished: false },
		{ id: 2, todoData: "todo 2", finished: false },
	]);

	return (
		<TodoContext.Provider value={{ list, setList }}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "centers",
					width: "100vw",
					gap: "12px",
				}}
			>
				<AddTodo
					updateList={(todo) =>
						setList([
							...list,
							{
								id: list.length + 1,
								todoData: todo,
								finished: false,
							},
						])
					}
				/>
				<TodoList />
			</div>
		</TodoContext.Provider>
	);
}

export default App;
