<template>
    <div class="main-container">
        <Item v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo.js'

import Item from './Item.vue'

const store = useTodoStore()
const { todos } = storeToRefs(store)

</script>

<style scoped>
</style>