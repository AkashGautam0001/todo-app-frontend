import Todo from "../Todo/Todo";

function TodoList({ list, updateList }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "12px",
			}}
		>
			{list.length > 0 &&
				list.map((todo) => (
					<Todo
						key={todo.id}
						id={todo.id}
						todoData={todo.todoData}
						isFinished={todo.finished}
						changeFinished={(isFinished) => {
							const updatedList = list.map((t) => {
								if (t.id == todo.id) {
									todo.finished = isFinished;
								}
								return t;
							});
							updateList(updatedList);
						}}
					/>
				))}
		</div>
	);
}

export default TodoList;
