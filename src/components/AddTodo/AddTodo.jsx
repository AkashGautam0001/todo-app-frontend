import { useState } from "react";

function AddTodo({ addTodo }) {
	const [inputText, setInputText] = useState("");

	return (
		<div>
			<input
				style={{
					width: "15vw",
					padding: "10px",
					fontSize: "16px",
					borderRadius: "4px",
					border: "none",
					margin: "6px",
					outline: "none",
				}}
				type="text"
				value={inputText}
				placeholder="add your next todo"
				onChange={(e) => setInputText(e.target.value)}
			/>
			<button
				onClick={() => {
					addTodo(inputText);
					setInputText("");
				}}
			>
				Add
			</button>
		</div>
	);
}

export default AddTodo;
