
import  { useState } from  'react';
import Todo from './Componentes/Form/Todo'
import './App.css';
import ListaTodo from './Componentes/Form/ListaTodo';

function App() {
  
  const [listaTodo, setListaTodo] =useState([]);

  const eliminarTodo = (name, completo) =>{
    if(completo){
    setListaTodo ((prev)=>  prev.filter(todo => todo.name !== name ));
  }
    else{
      alert("Esta incompleto")
    }
  }

  const cambiarEstadoTodo = (name) =>{
    setListaTodo( (prev) => prev.map(todo => {
      if( todo.name === name){
        return { name, completo: !todo.completo }
      }
      else {
        return todo;
      }
    }))
  }

  return (
    <div className="App">
      <Todo setListaTodo={setListaTodo}   />
      <ListaTodo listaTodo={listaTodo} eliminarTodo={eliminarTodo} cambiarEstadoTodo={cambiarEstadoTodo}/>
      
      
      
    </div>
  );
}

export default App;
