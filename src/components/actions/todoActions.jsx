import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	FINISH_TODO,
} from "../../constants/actions";

export const todoFininshed = (todo, isFinished) => ({
	type: FINISH_TODO,
	payload: { todo, isFinished: isFinished },
});

export const deleteTodo = (todo) => ({
	type: DELETE_TODO,
	payload: { todo },
});

export const editTodo = (todo, todoText) => ({
	type: EDIT_TODO,
	payload: { todo, todoText },
});

export const addTodo = (inputText) => ({
	type: ADD_TODO,
	payload: { todoText: inputText },
});
