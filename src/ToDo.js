import React, { useState } from "react";


function TodosComponent() {

  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "Have you heard of the movie?",
      isCompleted: false
    },
    {
      // todo: "go for a walk" 
      todo: "Have you seen the ratings on IMDB?",
      isCompleted: false
    },
    {
      todo: "Have you seen the ratings on Rotten Tomatoes?",
      isCompleted: false
    },
    {
      todo: "Have you asked your friends?",
      isCompleted: false
    },
    {
      todo: "Have you seen the latest trailer? ratings on Rotten Tomatoes?",
      isCompleted: false
    },
  ]);

  function createNewTodo(currentTodo) {
    let todosArray = [...todos];
    todosArray.push({
      todo: currentTodo,
      isCompleted: false
    });
    setTodos(todosArray);
  }

  function completeTodo(index) {
    let todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  }

  function deleteTodo(index) {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={todo} className="todo">
          <div className="checkbox" onClick={() => completeTodo(index)}>
            {todo.isCompleted && <span>&#x2714;</span>}
          </div>
          <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
          <div className="delete" onClick={() => deleteTodo(index)}>
            &#128465;
          </div>
        </div>
      ))}
      {todos.length > 0 && `${todos.length} items`}
    </div>
  );
}
export default TodosComponent;