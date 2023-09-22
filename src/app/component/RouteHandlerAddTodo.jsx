'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RouteHandlerAddTodo = ({ courses }) => {
    const [newTodo, setNewTodo] = useState('');
    const router = useRouter()

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const res = await fetch(`/api/todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTodo }),
      });
      console.log(res, "HIHH")
      router.refresh()
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='New Todo..'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='search-button' type='submit'>
          Add
        </button>
      </form>
    );
  };
export default RouteHandlerAddTodo;