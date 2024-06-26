import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

import React from 'react'
import TodoCard from "./components/TodoCard"

function App() {

  const [todos, setTodos] = useState(['Take Meds',
  'Get Prescription Refilled',
  'Make Charli Shirt']);
  const [todoVal, setTodoVal] = useState('');

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  function persistData(newList) {
    const todosList = JSON.stringify({todos: newList});
    localStorage.setItem('todos', todosList);
  }

  function handleAddTodos(todo) {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    persistData(newTodos);
  }

  function handleDeleteTodos(index) {
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    });
    setTodos(newTodos);
    persistData(newTodos);
  }

  function handleEditTodos(index) {
    const editTodo = todos[index];
    setTodoVal(editTodo);
    handleDeleteTodos(index);
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} setTodoVal={setTodoVal} todoVal={todoVal} />
      <TodoList handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todos={todos}/>
    </>
  )
}

export default App
