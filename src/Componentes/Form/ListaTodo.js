import React, {useState} from 'react';

const ListaTodo = (props) =>{
    const {listaTodo, eliminarTodo} = props
    
    


    return(
        <div>
        {
                          listaTodo.map((todo, index) => {
                            return(
                              <div key={'todo_' + index}>{todo.name} 
                                <input type='checkbox' name="checkbox" value={todo.completo}/>
                                <button type='submit' onClick={e=>eliminarTodo(todo.name)}>Delete</button>
                              </div>
                            )
                          } )
                              
                      }
        </div>
  )

}

export default ListaTodo;