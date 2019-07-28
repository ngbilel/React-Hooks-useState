import React, {useState} from 'react'
import ToDo from './components/Todo'
import AddTodoForm from './components/AddTodoForm'
import './App.css'
import todoimg from './images/todo-list.jpg'

const App = () =>{

  //List of Todos
  const [todos,setTodos] = useState ([
   /* {
      text: 'ToDo 1',
      isCompleted : false,
    }*/
  ])

  // Add Todo
  const addTodo = (todo) => {
    const newTodos =[...todos,todo];
    setTodos(newTodos);
  }

  // Complete Todo
  const completeTodo = (index)=>{
    const  newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  //Delete ToDo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  
  return (
    <div className="app">
      <div  className="todo-list">
        <img width="392px" src={todoimg} />
        
          { // display todos
            todos.map((todo,index)=>(
              // Complete and Remove Todo
              <ToDo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}></ToDo>
            ))
            // Add Todo
          }
          <AddTodoForm addTodo={addTodo}></AddTodoForm>
        </div>
      </div>
  )
}

export default App