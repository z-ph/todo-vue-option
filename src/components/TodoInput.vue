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
export default {
  name: 'TodoInput',
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    addTodo() {
      if (this.inputText.trim() === '') {
        return;
      }
      EventBus.$emit('add-todo', this.inputText.trim());
      this.inputText = '';
    },
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
