<template>
    <div class="footer" v-if="total">
        <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
        <input type="checkbox" v-model="isAll">
        <div>Completed {{ totalDone }} / All {{ total }}</div>
        <button @click="handleRemove">Remove ALL Completed</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { state } from '@/state'

const total = computed(() => state.todos.length)
const totalDone = computed(() => state.doneTotal())
// const isAll = computed(() => total.value === totalDone.value && total.value > 0)
const isAll = computed({
    get() {
        return total.value === totalDone.value && total.value > 0
    },
    set(value) {
        state.checkAllTodos(value)
    }
})

// const checkAll = (e) => {
//     state.checkAllTodos(e.target.checked)
// }

const handleRemove = () => {
    state.clearDone()
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
