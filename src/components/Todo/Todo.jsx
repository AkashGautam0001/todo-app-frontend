import { useState } from "react";

function Todo({ todoData, isFinished, changeFinished }) {
	const [finished, setFininshed] = useState(isFinished);

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
			{todoData}
			<button>Edit</button>
			<button>Delete</button>
		</div>
	);
}

export default Todo;
