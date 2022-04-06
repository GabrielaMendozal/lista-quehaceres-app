import React, {useState} from 'react';

const Todo = (props) =>{
    const {setListaTodo} = props

    const [todo, setTodo] = useState("");

    const onChange=(e)=>{
        setTodo(
            e.target.value
        )

    }

    const crearQuehacer = (event) => {
        event.preventDefault();     
        setListaTodo((prev)=>  [...prev, {name: todo, completo: true}]);
        setTodo("");
    
    }


    return(
      <div>
      <form onSubmit={ crearQuehacer }>
          <div>
              <input type="text" name="todo" value={todo} onChange={onChange}  />
          </div>
          <button type='submit'>Add</button>
      </form>
      
      </div>
  )

}

export default Todo;