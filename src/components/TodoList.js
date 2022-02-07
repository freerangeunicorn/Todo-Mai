const TodoList = ({ paginatedItems, onUpdateTodo, handleDelete }) => {
  return (
    <ul className="list-group mb-0">
      {paginatedItems.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom mb-2"
        >
          {todo.title}
          <span className="badge">
            <input
              data-testid="checkBox"
              class="form-check-input mt-2 me-3"
              type="checkbox"
              checked={todo.completed}
              onChange={() => onUpdateTodo(todo)}
            />
            <button
              type="button"
              data-testid="deleteBtn"
              className="btn btn-outline-danger btn-sm"
              onClick={() => handleDelete(todo)}
            >
              X
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
