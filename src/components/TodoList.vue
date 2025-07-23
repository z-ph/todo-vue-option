<template>
  <ul class="todo-list">
    <TodoItem
      v-for="(todo, index) in todoStore.todoList"
      :key="index"
      :todo="todo"
      :index="index"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';
import { useTodoStore } from '../stores/todoStore';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  setup() {
    const todoStore = useTodoStore();
    return {
      todoStore,
    };
  },
};
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
