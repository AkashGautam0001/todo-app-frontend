import { useState } from "react";

function AddTodo({ updateList }) {
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
				placeholder="add your next todo"
				onChange={(e) => setInputText(e.target.value)}
			/>
			<button
				onClick={() => {
					updateList(inputText);
					setInputText("");
				}}
			>
				Add
			</button>
		</div>
	);
}

export default AddTodo;
