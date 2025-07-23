<template>
  <ul class="todo-list">
    <TodoItem
      v-for="(todo, index) in todoList"
      :key="index"
      :todo="todo"
      :index="index"
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    todoList: Array,
  },
  emits: ['delete-todo', 'toggle-todo'],
  methods: {
    deleteTodo(index) {
      this.$emit('delete-todo', index);
    },
    toggleTodo(index) {
      this.$emit('toggle-todo', index);
    },
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
