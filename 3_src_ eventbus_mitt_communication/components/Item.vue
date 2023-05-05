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
import eventBus from '@/libs/eventBus'

const props = defineProps(['todo'])
const isEditing = ref(false)

const handleClick = (id) => {
    eventBus.emit('handleClick', id)
}

const handleDelete = (id) => {
    if(confirm('Are you sure?')) {
        eventBus.emit('handleDelete', id)
    }
}

const handleEdit = () => {
    isEditing.value = true
}

const handleBlur = (id, e) => {
    isEditing.value = false
    eventBus.emit('updateTodo', {id:id, title: e.target.value})

}
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
    }
</style>