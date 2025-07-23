<template>
  <div class="todo-container">
    <ShortcutBar
      :allCompleted="todoStore.allCompleted"
      @clear-completed="todoStore.clearCompleted"
      @toggle-all="todoStore.toggleAll"
    />
    <div class="todo-app">
      <h1 class="todo-title">todoList</h1>
      <TodoInput @add-todo="todoStore.addTodo" />
      <TodoList
        :todoList="todoStore.todoList"
        @delete-todo="todoStore.deleteTodo"
        @toggle-todo="todoStore.toggleTodo"
      />
    </div>
  </div>
</template>

<script>
import ShortcutBar from './components/ShortcutBar.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import { useTodoStore } from './stores/todoStore';

export default {
  name: 'App',
  components: {
    ShortcutBar,
    TodoInput,
    TodoList,
  },
  setup() {
    const todoStore = useTodoStore();
    return {
      todoStore,
    };
  },
};
</script>

<style>
.todo-container {
  display: flex;
  width: 800px;
  margin: 60px auto;
}

.todo-app {
  flex: 1;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.todo-title {
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}
</style>