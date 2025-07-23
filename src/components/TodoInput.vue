<template>
  <input
    class="todo-input"
    type="text"
    placeholder="enter to add a todo"
    @keyup.enter="addTodo"
    v-model="inputText"
  />
</template>

<script>
import { useTodoStore } from '../stores/todoStore';
import { ref } from 'vue';

export default {
  name: 'TodoInput',
  setup() {
    const todoStore = useTodoStore();
    const inputText = ref('');

    const addTodo = () => {
      if (inputText.value.trim() === '') {
        return;
      }
      todoStore.addTodo(inputText.value.trim());
      inputText.value = '';
    };

    return {
      inputText,
      addTodo,
    };
  },
};
</script>

<style scoped>
.todo-input {
  width: 100%;
  padding: 14px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  margin-bottom: 20px;
}

.todo-input:focus {
  outline: none;
  border-color: #2196F3;
}
</style>
