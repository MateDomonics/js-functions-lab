fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const uncompletedTodos = json.reduce((reducer, todo) => {
            if (!todo.completed) {
                reducer.push(todo)
            }
            return reducer
        }, [])
        console.log(uncompletedTodos.map(profile => {
            return {
                userID: profile.userId,
                title: profile.title
            }
        }))
    })
    .catch(function (err) {
        console.log(err);
    });