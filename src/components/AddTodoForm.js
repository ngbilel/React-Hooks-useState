import React, {useState} from 'react'

// Add a new Todo | Complete a Todo | Remove a Todo

const AddTodoForm = ({addTodo}) => {

  const [todoValue, setTodoValue] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newTodo = { text:todoValue, isCompleted:false};
    addTodo(newTodo);
    setTodoValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoValue} placeholder="Add a Todo" onChange={e=>setTodoValue(e.target.value)}/>
    </form>
  )
  
}
export default AddTodoForm