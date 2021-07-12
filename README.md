##### Comsumir API desde: https://jsonplaceholder.typicode.com/todos

###### Parte del codigo en la etapa: Creacion de CSS y Map
```javascript
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
<ul>
  <li>https://haneyx.github.io/React.ConsumirApiSample/</li>
</ul>
