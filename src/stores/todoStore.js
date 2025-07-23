import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: [],
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
    },
    // 删除待办事项
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
    // 切换待办事项完成状态
    toggleTodo(index) {
      this.todoList[index].completed = !this.todoList[index].completed;
    },
    // 清空已完成的待办事项
    clearCompleted() {
      this.todoList = this.todoList.filter((item) => !item.completed);
    },
    // 全选/取消全选
    toggleAll() {
      const isAllCompleted = this.allCompleted;
      this.todoList.forEach((todo) => {
        todo.completed = !isAllCompleted;
      });
    },
  },
});
