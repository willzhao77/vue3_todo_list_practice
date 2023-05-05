<template>
    <div class="item">
        <input type="checkbox" :checked="props.todo.done" @click="handleClick(props.todo.id)">
        <div v-show="!isEditing">{{ props.todo.id }} --- {{ props.todo.title }}</div>
        <input v-show="isEditing" type="text" :value="props.todo.title" @blur="handleBlur(props.todo.id, $event)">
        <button @click="handleEdit">Edit</button>
        <button @click="handleDelete(props.todo.id)">Delete</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo.js'

const store = useTodoStore()
const { changeStatus, updateTodo, deleteToDo } = store

const props = defineProps(['todo'])
const isEditing = ref(false)

const handleClick = (id) => {
    changeStatus(id)
}

const handleDelete = (id) => {
    if(confirm('Are you sure?')) {
        deleteToDo(id)
    }
}

const handleEdit = () => {
    isEditing.value = true
}

const handleBlur = (id, e) => {
    isEditing.value = false
    updateTodo(id, e.target.value)

}
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
    }
</style>