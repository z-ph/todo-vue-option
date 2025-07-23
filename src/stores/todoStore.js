import { defineStore } from 'pinia';

const TODO_KEY = 'todo_list';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    // 从 localStorage 中获取 todo 列表，如果没有则初始化为空数组
    todoList: JSON.parse(localStorage.getItem(TODO_KEY)) || [],
  }),
  getters: {
    // 计算是否所有任务都已完成
    allCompleted: (state) => state.todoList.every((todo) => todo.completed),
  },
  actions: {
    // 添加待办事项
    addTodo(text) {
      this.todoList.unshift({
        text,
        completed: false,
      });
      this.saveToLocalStorage();
    },
    // 删除待办事项
    deleteTodo(index) {
      this.todoList.splice(index, 1);
      this.saveToLocalStorage();
    },
    // 切换待办事项完成状态
    toggleTodo(index) {
      this.todoList[index].completed = !this.todoList[index].completed;
      this.saveToLocalStorage();
    },
    // 清空已完成的待办事项
    clearCompleted() {
      this.todoList = this.todoList.filter((item) => !item.completed);
      this.saveToLocalStorage();
    },
    // 全选/取消全选
    toggleAll() {
      const isAllCompleted = this.allCompleted;
      this.todoList.forEach((todo) => {
        todo.completed = !isAllCompleted;
      });
      this.saveToLocalStorage();
    },
    // 将 todo 列表保存到 localStorage
    saveToLocalStorage() {
      localStorage.setItem(TODO_KEY, JSON.stringify(this.todoList));
    },
  },
});
