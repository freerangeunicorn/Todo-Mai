import { render, screen } from "@testing-library/react";
import Loading from "./components/Loading";
import App from "./App";
import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination";

test("renders App", () => {
  render(<App />);
  const title = screen.getByText(/Mai Todo List/i);
  const inputForm = screen.getByTestId("inputFormTodo");
  const button = screen.getByText(/ADD/i);
  expect(title).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(inputForm).toBeInTheDocument();
});

test("renders Loading component", () => {
  render(<Loading />);
  const loadingText = screen.getByText(/Loading.../i);
  expect(loadingText).toBeInTheDocument();
});

test("renders Pagination component", async () => {
  render(<Pagination />);
  const pageButton = await screen.findAllByRole("button");
  expect(pageButton).toHaveLength(10);
});

test("renders TodoList component", async() => {
  render(<TodoList todo={[]} />);
  const checkBox =  screen.getByTestId("checkBox");
  const deleteButton = screen.getByTestId("deleteBtn");
  expect(checkBox).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
});
