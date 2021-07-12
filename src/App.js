import React, { useEffect, useState } from 'react';
//import './App.css';

/*function Example(){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    console.log('hiciste click '+count+' veces');
  });

  return(
    <div>
      <button onClick={() => setCount(count+1)}>click</button>
    </div>
  )
}*/

function Consumir() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const [todos, setTodos] = useState([]); //Hook que va a contener datos

  const obtenerDatos = async() => {
    const data = await fetch(url); //devuelve JSON
    console.log('Respuesta obtenida: '+data.status); //200 si llego los datos

    const dataJSON1 = await data.json();//donde recibir
    setTodos(dataJSON1);//empujar datos
    console.log(dataJSON1);
  }

  useEffect(()=>{ obtenerDatos() }, []) //hook luego de pintar todo , [] ejecutar usa sola vez

  return(
    <div>
      <h1>Todos</h1>
      <h2>Obtenido desde: {url}</h2>
      <ul>
        {
          todos.map(item => (
            <li key={item.id}>{item.id} : {item.title}</li>
          ))
        }
      </ul>
    </div>
  );


  /*return (
    <div>
      { true ? 'verdadero': 'falso'}
      <ul>
        { !todos ? 'Cargando...' :
            todos.map((todo,index)=>{
            return <li>{todo.title}</li>
        })
        }
      </ul>
    </div>
  );*/
}

export default Consumir;
