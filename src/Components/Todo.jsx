import React, { useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import Todoitems from './Todoitems';

const Todo = () => {
  const [todolist, setTodolist] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      iscomplete: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodolist((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      add();
    }
  };

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      {/*----------title----------*/}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt="Todo Icon" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>
      {/*---------- input box ----------*/}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input
          ref={inputRef}
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
          type="text"
          placeholder='Add your task'
          onKeyPress={handleKeyPress} // Adding Enter key functionality
        />
        <button
          onClick={add}
          className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
        >
          ADD +
        </button>
      </div>
      {/*---------- Todo list ----------*/}
      <div>
        {todolist.map((item) => {
          return (
            <Todoitems
              key={item.id} // Use item.id as the key
              text={item.text}
              id={item.id}
              iscomplete={item.iscomplete}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
