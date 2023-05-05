<template>
    <div class="header-container">
        <input type="text" v-model="toDoTitle">
        <button @click="add">Add</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import eventBus from '@/libs/eventBus'

const toDoTitle = ref()

function add() {
    eventBus.emit('addTodo', toDoTitle.value)
}
</script>

<style scoped>
.header-container {
    height: 50px;
}
</style>