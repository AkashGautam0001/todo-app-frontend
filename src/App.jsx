import { useDispatch } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { bindActionCreators } from "redux";
import {
	addTodo,
	deleteTodo,
	editTodo,
	todoFininshed,
} from "./components/actions/todoActions";

function App() {
	const appCSS = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "centers",
		width: "100vw",
		gap: "12px",
	};

	const dispatch = useDispatch();
	const actions = bindActionCreators(
		{ addTodo, deleteTodo, editTodo, todoFininshed },
		dispatch
	);
	return (
		<div style={appCSS}>
			<AddTodo addTodo={actions.addTodo} />
			<TodoList
				deleteTodo={actions.deleteTodo}
				editTodo={actions.editTodo}
				todoFininshed={actions.todoFininshed}
			/>
		</div>
	);
}

export default App;
