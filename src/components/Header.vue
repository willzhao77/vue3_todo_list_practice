<template>
    <div class="header-container">
        <input type="text" v-model="toDoTitle">
        <button @click="add">Add</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'


import { useTodoStore } from '@/stores/todo.js'

const store = useTodoStore()
const { addTodo } = store

const toDoTitle = ref()

    function add() {
        addTodo(toDoTitle.value);
    }
</script>

<style scoped>
.header-container {
    height: 50px;
}
</style>