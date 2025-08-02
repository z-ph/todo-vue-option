<template>
  <ul class="todo-list">
    <TodoItem
      v-for="(todo, index) in todoList"
      :key="index"
      :todo="todo"
      :index="index"
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
  
  data(){
    return {
      todoList: [],
    }
  },
  mounted(){
    console.log('TodoList mounted');
    EventBus.$on('on-todo-list-changed',(todos)=>{
      this.todoList = todos;
    })
  }
};
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
