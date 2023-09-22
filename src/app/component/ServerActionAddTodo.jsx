'use client'
import { addTodoAction } from 'app/actions/addTodoServerAction';

const ServerActionAddTodo = ({ courses }) => {

    const handleSubmit = async (formData) => {
      console.log("client side: ", formData.get('content'))
      console.log("validation...")
  
      const res = await addTodoAction(formData)
    };
  
    return (
      <form action={handleSubmit}>
        <input
          type='text'
          placeholder='New Todo..'
          name='content'
        />
        <button className='search-button' type='submit'>
          Add
        </button>
      </form>
    );
  };

export default ServerActionAddTodo;