fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompletedTodos = json.filter((todo,index)=> {
        return !todo.completed
      }).map(profile => {
        return {
            userID: profile.userId,
            title: profile.title
        };
      });
      console.log(uncompletedTodos)
  })
  .catch(function(err) { 
    console.log(err);
  });