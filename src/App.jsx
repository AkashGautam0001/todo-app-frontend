import { useReducer, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import todoReducer from "./reducers/todoReducer";
import TodoDispatchContext from "./context/TodoDispatchContext";
function App() {
	// const [list, setList] = useState([
	// 	{ id: 1, todoData: "todo 1", finished: false },
	// 	{ id: 2, todoData: "todo 2", finished: false },
	// ]);

	const [list, dispatch] = useReducer(todoReducer, []);

	const appCSS = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "centers",
		width: "100vw",
		gap: "12px",
	};

	return (
		<TodoContext.Provider value={{ list }}>
			<TodoDispatchContext.Provider value={{ dispatch }}>
				<div style={appCSS}>
					<AddTodo />
					<TodoList />
				</div>
			</TodoDispatchContext.Provider>
		</TodoContext.Provider>
	);
}

export default App;
