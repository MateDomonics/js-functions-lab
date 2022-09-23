fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completedTodos = json.filter((todo,index)=> {
      return todo.completed
    })
    completedTodos.forEach( (todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })
  
  })
  .catch(function(err) { 
    console.log(err);
  });