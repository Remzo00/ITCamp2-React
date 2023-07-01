import React, { useEffect, useState } from 'react';
import { fetchTodos, createTodo, deleteTodo, updateTodo } from '../api/index';
//CRUD
//Create
//Read
//Update
//Delete
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchTodos();
  //     setTodos(data);
  //   };

  //   fetchData();
  // }, []);

  const handleCreateTodo = async () => {
    const newTodo = { title: 'New Todo', completed: false };
    const createdTodo = await createTodo(newTodo);
    setTodos([...todos, createdTodo]);
  };

  const handleDeleteTodo = async (todoId) => {
    const removeId = await deleteTodo(todoId);
    if (removeId) {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    }
  };

  return(
    <div>
      <button onClick={handleCreateTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}
           <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
           </li>
        ))}
      </ul>
    </div>
  )
};

export default TodoList;