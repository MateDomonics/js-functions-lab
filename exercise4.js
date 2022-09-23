fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completedTodos = json.reduce((total, todo) => {
        return total + todo.completed
    },0);
    console.log(completedTodos)
  })
  .catch(function(err) { 
    console.log(err);
  });