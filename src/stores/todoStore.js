import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const TODO_KEY = 'todo_list';

export const useTodoStore = defineStore('todo', () => {
  // 从 localStorage 中获取 todo 列表，如果没有则初始化为空数组
  const todoList = ref(JSON.parse(localStorage.getItem(TODO_KEY)) || []);

  // 计算是否所有任务都已完成
  const allCompleted = computed(() => todoList.value.every(todo => todo.completed));

  // 添加待办事项
  const addTodo = (text) => {
    todoList.value.unshift({
      text,
      completed: false
    });
    saveToLocalStorage();
  };

  // 删除待办事项
  const deleteTodo = (index) => {
    todoList.value.splice(index, 1);
    saveToLocalStorage();
  };

  // 切换待办事项完成状态
  const toggleTodo = (index) => {
    todoList.value[index].completed = !todoList.value[index].completed;
    saveToLocalStorage();
  };

  // 清空已完成的待办事项
  const clearCompleted = () => {
    todoList.value = todoList.value.filter(item => !item.completed);
    saveToLocalStorage();
  };

  // 全选/取消全选
  const toggleAll = () => {
    const isAllCompleted = allCompleted.value;
    todoList.value.forEach(todo => {
      todo.completed = !isAllCompleted;
    });
    saveToLocalStorage();
  };

  // 将 todo 列表保存到 localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList.value));
  };

  return {
    todoList,
    allCompleted,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted,
    toggleAll
  };
});
