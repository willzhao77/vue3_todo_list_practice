import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export const useTodoStore = defineStore('todos', () => {
  const todos = reactive([
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
  ])

  function addTodo(title) {
    todos.push({
      id: nanoid(),
      title: title,
      done: false
    })
  }

  function changeStatus(id) {
    todos.forEach(todo => {
        if (todo.id == id) {
            todo.done =!todo.done
        }
    })
  }

  function deleteToDo(id) {
    removeObjectWithId(todos, id)
  }

  function getTotal() {
    return todos.length
  }

  function getDoneTotal() {
      return todos.reduce((pre, current) => pre + (current.done? 1 : 0), 0)
  }

  function checkAllTodos(done) {
      todos.forEach(todo => {
          todo.done = done
      })
  }

  function clearDone() {
      const unDone = todos.filter(todo =>!todo.done)
      todos.splice(0, todos.length)
      todos.push(...unDone)
  }

  function updateTodo(id, title) {
      todos.forEach(todo => {
          if(todo.id == id) {
              todo.title = title
          }
      })
  }

  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    todos.splice(objWithIdIndex, 1);
  }

  return {  todos,
            addTodo,
            changeStatus,
            deleteToDo,
            getDoneTotal,
            checkAllTodos,
            clearDone,
            updateTodo,
            getTotal
          }
})
