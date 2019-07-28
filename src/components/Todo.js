import React from "react"

// Dislpay Todo Component
const ToDo = ({todo:{text,isCompleted},index,completeTodo,deleteTodo}) => {

    return  <div className='todo' >
              <div  style={{ textDecoration: isCompleted ?  'line-through' : '' }} > {text} </div>
              <div className="button">
              <button  onClick={()=>completeTodo(index)}>complete</button> 
              <button  onClick={()=>deleteTodo(index)}>X</button>
              </div>
            </div> 
          
  }

export default ToDo