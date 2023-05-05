<template>
    <div class="main-container">
        <Item v-for="todo in state.todos" :key="todo.id" :todo="todo"/>
    </div>
</template>

<script setup>
import { state } from '@/state'
import Item from './Item.vue'
</script>

<style scoped>
</style>