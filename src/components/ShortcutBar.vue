<template>
  <div class="shortcut-bar">
    <button @click="clearCompleted">清空已完成</button>
    <button @click="toggleAll">{{ todoStore.allCompleted ? '取消全选' : '全选' }}</button>
    <!-- <button @click="toggleAll">{{ allCompleted ? '取消全选' : '全选' }}</button> -->

  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../stores/todoStore';

const todoStore = useTodoStore();
const { clearCompleted, toggleAll } = todoStore;
// const { allCompleted } = todoStore;
// const { allCompleted } = storeToRefs(todoStore);
</script>

<style scoped>
.shortcut-bar {
  width: 150px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
}

.shortcut-bar button {
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #2196F3;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.shortcut-bar button:hover {
  background-color: #1976D2;
}
</style>
