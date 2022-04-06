
import  { useState } from  'react';
import Todo from './Componentes/Form/Todo'
import './App.css';
import ListaTodo from './Componentes/Form/ListaTodo';

function App() {
  
  const [listaTodo, setListaTodo] =useState([]);

  const eliminarTodo = (name) =>{
    setListaTodo ((prev)=>  prev.filter(todo => todo.name !== name ));
  }

  return (
    <div className="App">
      <Todo setListaTodo={setListaTodo}   />
      <ListaTodo listaTodo={listaTodo} eliminarTodo={eliminarTodo}/>
      
      
      
    </div>
  );
}

export default App;
