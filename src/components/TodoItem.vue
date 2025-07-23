<template>
  <li class="todo-item">
    <input type="checkbox" :checked="todo.completed" @click="toggleTodo"/>
    <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">{{ todo.text }}</span>
    <button @click="deleteTodo">删除</button>
  </li>
</template>

<script setup>
import { useTodoStore } from '../stores/todoStore';
const props = defineProps({
  todo: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});

const todoStore = useTodoStore();

const deleteTodo = () => {
  todoStore.deleteTodo(props.index);
};

const toggleTodo = () => {
  todoStore.toggleTodo(props.index);
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #f9f9f9;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.todo-item:hover {
  background-color: #f0f0f0;
}

.todo-item input[type="checkbox"] {
  margin-right: 16px;
  transform: scale(1.2);
}

.todo-item span {
  flex: 1;
  font-size: 16px;
  color: #333;
}

.todo-item.completed span {
  text-decoration: line-through;
  color: #888;
}

.todo-item button {
  padding: 6px 12px;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.todo-item button:hover {
  background-color: #cc0000;
}
</style>
