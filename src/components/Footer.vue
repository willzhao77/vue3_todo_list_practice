<template>
    <div class="footer" v-if="total">
        <input type="checkbox" v-model="isAll">
        <div>Completed {{ doneTotal }} / All {{ total }}</div>
        <button @click="handleRemove">Remove ALL Completed</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTodoStore } from '@/stores/todo.js'

const store = useTodoStore()


const total = computed(() => store.getTotal())
const doneTotal = computed(() => store.getDoneTotal())

const isAll = computed({
    get() {
        return total.value === doneTotal.value && total.value > 0
    },
    set(value) {
        store.checkAllTodos(value)
    }
})

const handleRemove = () => {
    store.clearDone()
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
}
</style>
