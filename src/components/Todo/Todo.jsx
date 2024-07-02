import { useState } from "react";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
	const [finished, setFininshed] = useState(isFinished);
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(todoData);

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "12px",
			}}
		>
			<input
				type="checkbox"
				checked={finished}
				onChange={(e) => {
					setFininshed(e.target.checked);
					changeFinished(e.target.checked);
				}}
			/>
			{isEditing ? (
				<input
					style={{
						width: "15vw",
						padding: "10px",
						fontSize: "16px",
						borderRadius: "4px",
						border: "none",
						marginTop: "6px",
						outline: "none",
					}}
					type="text"
					value={editText}
					onChange={(e) => setEditText(e.target.value)}
				/>
			) : (
				<span>{todoData}</span>
			)}
			<button
				onClick={() => {
					setIsEditing(!isEditing);
					onEdit(editText);
				}}
			>
				{!isEditing ? "Edit" : "Save"}
			</button>
			<button onClick={onDelete}>Delete</button>
		</div>
	);
}

export default Todo;
