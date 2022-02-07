import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const addItem = (todo) => {
    const newItem = [...todos];
    newItem.unshift({ id: todos.length, completed: false, title: todo });
    setTodos(newItem);
  };

  const addInput = (event) => {
    setInput(event.target.value);
  };
  const handleDelete = ({ id }) => {
    setPaginatedItems(paginatedItems.filter((todo) => todo.id !== id));
  };

  const onUpdateTodo = (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.id === todo.id);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;
    setTodos(newTodos);
  };

  const pageSelection = (event) => {
    const itemsPerPage = 10;
    const pageNumber = event.target.value;

    let temp = [...todos];
    const endIndex = pageNumber * itemsPerPage; //endOfPageIndex
    const startIndex = endIndex - itemsPerPage;
    temp = temp.slice(startIndex, endIndex);

    setCurrentPage(pageNumber);
    setPaginatedItems(temp);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      let temp = [...result.data];
      temp = temp.slice(0, 10);
      setTodos(result.data); //fetching jsondata
      setPaginatedItems(temp);
    });
  }, []); //[] only fires one time when the component loads

  return (
    <section className="background">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-8">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="header">Mai Todo List</h2>

                <form className="d-flex justify-content-center align-items-center mb-4">
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      placeholder="What is your todo?"
                      onChange={addInput}
                      className="form-control form-control-lg col-sm-10"
                      data-testid="inputFormTodo"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg ms-2"
                    onClick={() => addItem(input)}
                  >
                    ADD
                  </button>
                </form>

                {todos ? (
                  <div>
                    <TodoList
                      paginatedItems={paginatedItems}
                      onUpdateTodo={onUpdateTodo}
                      handleDelete={handleDelete}
                    />
                    <Pagination pageSelection={pageSelection} />
                  </div>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
