const tasks = {
    tasks: [{
        text: 'Shayan',
        completed: true,
    }, {
        text: 'Faham',
        completed: false
    }, {
        text: 'Faris',
        completed: false
    }],
    getTasksToDo() {
        const taskTodo = this.tasks.filter((task) => {
            return task.completed !== true
        })
        return taskTodo
    }
}

console.log(tasks.getTasksToDo())