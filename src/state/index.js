import {reactive} from 'vue'

export const state = reactive({
    todos: [
        {
            id: 1,
            title: 'Sample To Do',
            done: false
        },
        {
            id: 2,
            title: 'Sample To Do',
            done: true
        },
    ],

    changeStatus(id) {
        this.todos.forEach(todo => {
            if (todo.id == id) {
                todo.done =!todo.done
            }
        })
    },

    deleteToDo(id) {
        this.todos = this.todos.filter(todo => todo.id!= id)
    },

    doneTotal() {
        return this.todos.reduce((pre, current) => pre + (current.done? 1 : 0), 0)
    },

    checkAllTodos(done) {
        this.todos.forEach(todo => {
            todo.done = done
        })
    },

    clearDone() {
        this.todos = this.todos.filter(todo =>!todo.done)
    }, 

    updateTodo(id, title) {
        this.todos.forEach(todo => {
            if(todo.id == id) {
                todo.title = title
            }
        })
    }
})