<template>
    <div class="main-container">
        <Item v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import eventBus from '@/libs/eventBus'
import { nanoid } from 'nanoid'
import Item from './Item.vue'

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


eventBus.on('addTodo', addTodo)
eventBus.on('handleClick', handleClick)
eventBus.on('handleDelete', handleDelete)
eventBus.on('updateTodo', updateTodo)
eventBus.on('checkAllTodos', checkAllTodos)
eventBus.on('clearDone', clearDone)

function addTodo(title) {
    todos.push({
      id: nanoid(),
      title: title,
      done: false
    })
    publishTotal()
}

function handleClick(id) {
    todos.forEach(todo => {
        if (todo.id == id) {
            todo.done =!todo.done
        }
    })
    publishDoneTotal()
}

function handleDelete(id) {
    removeObjectWithId(todos, id)
    publishTotal()
    publishDoneTotal()
}

function updateTodo(newTodoObj) {
    todos.forEach(todo => {
          if(todo.id == newTodoObj.id) {
              todo.title = newTodoObj.title
          }
      })
}

function checkAllTodos(done) {
    todos.forEach(todo => {
          todo.done = done
      })
    publishDoneTotal()
}

function clearDone() {
    const unDone = todos.filter(todo =>!todo.done)
    todos.splice(0, todos.length)
    todos.push(...unDone)
    publishTotal()
    publishDoneTotal()
}

function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    todos.splice(objWithIdIndex, 1);
  }

function publishTotal() {
    eventBus.emit('todoTotal', todos.length)
}

function publishDoneTotal() {
    eventBus.emit('todoDoneTotal', todos.reduce((pre, current) => pre + (current.done? 1 : 0), 0))
} 
</script>

<style scoped>
</style>