<template>
  <div class="todo-container">
    <!-- 侧边快捷键栏 -->
    <div class="shortcut-bar">
      <button @click="clearCompleted">清空已完成</button>
      <button @click="toggleAll">{{ allCompleted ? '取消全选' : '全选' }}</button>
    </div>
    <div class="todo-app">
      <h1 class="todo-title">todoList</h1>
      <input class="todo-input" type="text" placeholder="enter to add a todo" @keyup.enter="addTodo" v-model="inputText">
      <ul class="todo-list">
        <li class="todo-item" v-for="(todo, index) in todoList" :key="index">
          <input type="checkbox" v-model="todo.completed">
          <span :style="{textDecoration:todo.completed?'line-through':'none'}">{{ todo.text }}</span>
          <button @click="deleteTodo(index)">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      todoList: [],
      inputText: ''
    };
  },
  computed: {
    // 计算是否全部任务已完成
    allCompleted() {
      return this.todoList.every(todo => todo.completed);
    }
  },
  methods: {
    addTodo() {
      if (this.inputText.trim() === '') {
        return;
      }
      this.todoList.unshift({
        text: this.inputText,
        completed: false
      });
      this.inputText = '';
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
    toggleTodo(index) {
      this.todoList[index].completed = !this.todoList[index].completed;
    },
    clearCompleted() {
      this.todoList = this.todoList.filter(item => !item.completed);
    },
    // 全选/取消全选功能
    toggleAll() {
      const isAllCompleted = this.allCompleted;
      this.todoList.forEach(todo => {
        todo.completed = !isAllCompleted;
      });
    }
  }
};
</script>
<style>
.todo-container {
  display: flex;
  width: 800px;
  margin: 60px auto;
}

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

/* 整体应用样式 */
.todo-app {
  flex: 1;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* 标题样式 */
.todo-title {
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

/* 输入框样式 */
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

/* 待办事项列表样式 */
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 单个待办事项样式 */
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