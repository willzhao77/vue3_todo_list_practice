<template>
    <div class="footer" v-if="total">
        <input type="checkbox" v-model="isAll">
        <div>Completed {{ doneTotal }} / All {{ total }}</div>
        <button @click="handleRemove">Remove ALL Completed</button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import eventBus from '@/libs/eventBus'

eventBus.on('todoTotal', getTodoTotal)

eventBus.on('todoDoneTotal', getDoneTotal)

const total = ref(2)
const doneTotal = ref(1)


function getTodoTotal(num) {
    total.value= num
}

function getDoneTotal(num) {
    doneTotal.value = num
}


const isAll = computed({
    get() {
        return total.value === doneTotal.value && total.value > 0
    },
    set(value) {
        eventBus.emit('checkAllTodos', value)
    }
})

const handleRemove = () => {
    // store.clearDone()
    eventBus.emit('clearDone')
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
