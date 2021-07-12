## React.ConsumirApiSample
##### Consumir API desde: https://jsonplaceholder.typicode.com/todos

```javascript
Parte del codigo en la etapa: Creacion de CSS y Map
return (
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
  );
```

##### Ejecutable desde
####### https://haneyx.github.io/React.ConsumirApiSample/
