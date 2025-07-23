<template>
  <div class="todo-container">
    <ShortcutBar
      :allCompleted="allCompleted"
      @clear-completed="clearCompleted"
      @toggle-all="toggleAll"
    />
    <div class="todo-app">
      <h1 class="todo-title">todoList</h1>
      <TodoInput @add-todo="addTodo" />
      <TodoList
        :todoList="todoList"
        @delete-todo="deleteTodo"
        @toggle-todo="toggleTodo"
      />
    </div>
  </div>
</template>

<script>
import ShortcutBar from './components/ShortcutBar.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    ShortcutBar,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todoList: [],
    };
  },
  computed: {
    allCompleted() {
      return this.todoList.every((todo) => todo.completed);
    },
  },
  methods: {
    addTodo(text) {
      this.todoList.unshift({
        text,
        completed: false,
      });
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
    toggleTodo(index) {
      this.todoList[index].completed = !this.todoList[index].completed;
    },
    clearCompleted() {
      this.todoList = this.todoList.filter((item) => !item.completed);
    },
    toggleAll() {
      const isAllCompleted = this.allCompleted;
      this.todoList.forEach((todo) => {
        todo.completed = !isAllCompleted;
      });
    },
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