import React, {useState} from 'react';

const ListaTodo = (props) =>{
    const {listaTodo, eliminarTodo, cambiarEstadoTodo} = props
    
    


    return(
        <div>
        {
                          listaTodo.map((todo, index) => {
                            return(
                              <div key={'todo_' + index}><span className={todo.completo && "subrayado"
                            }>{todo.name}</span> 
                                <input type='checkbox' name="checkbox" checked={todo.completo} 
                                onClick={e=>cambiarEstadoTodo(todo.name)}/>
                                <button type='submit' onClick={e=>eliminarTodo(todo.name, todo.completo)}>Delete</button>
                              </div>
                            )
                          } )
                              
                      }
        </div>
  )

}

export default ListaTodo;