<template>
    <div class="header-container">
        <input type="text" v-model="toDoTitle">
        <button @click="add">Add</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import { state } from '@/state'

const toDoTitle = ref()

    function add() {
        state.todos.push({ 
            id: nanoid(), 
            title:toDoTitle.value, 
            done: false
        });
    }
</script>

<style scoped>
.header-container {
    height: 50px;
}
</style>