fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((total, todo) => {
      if(todo.completed) {
        //Look through the user IDs, but since we start with an empty array,
        //we want to deal with looking at an undefined userID.
        //So, if it's undefined, then make it equal to 1, and if we find the same userID, then increment it.
        total[todo.userId] === undefined ?
        (total[todo.userId] = 1):
        (total[todo.userId] += 1);
      }
      return total
    }, [])
    console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });