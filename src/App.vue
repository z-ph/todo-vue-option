<template>
	<div class="todo-container">
		<ShortcutBar />
		<div class="todo-app">
			<h1 class="todo-title">todoList</h1>
			<TodoInput />
			<TodoList />
		</div>
	</div>
</template>

<script>
	import ShortcutBar from "./components/ShortcutBar.vue";
	import TodoInput from "./components/TodoInput.vue";
	import TodoList from "./components/TodoList.vue";
	import EventBus from "./utils/EventBus";

	export default {
		name: "App",
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
		watch: {
			todoList: {
				handler() {
					EventBus.$emit('on-todo-list-changed',this.todoList);
					this.storeTodos();
				},
				deep: true,
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
				this.todoList[index].completed =
					!this.todoList[index].completed;
			},
			clearCompleted() {
				// this.todoList.length=0
				this.todoList = this.todoList.filter((todo) => !todo.completed);
			},
			toggleAll() {
				const isAllCompleted = this.allCompleted;
				this.todoList.forEach((todo) => {
					todo.completed = !isAllCompleted;
				});
			},
			storeTodos() {
				localStorage.setItem("todos", JSON.stringify(this.todoList));
			},
		},
		mounted() {
			console.log("mounted");
			const todos = localStorage.getItem("todos");
			if (todos) {
				this.todoList = JSON.parse(todos);
			}
			EventBus.$on("store-todos", this.storeTodos);
			EventBus.$on("toggle-todo", this.toggleTodo);
			EventBus.$on("delete-todo", this.deleteTodo);
			EventBus.$on("add-todo", this.addTodo);
			EventBus.$on("clear-completed", this.clearCompleted);
			EventBus.$on("toggle-all", this.toggleAll);
		},
		beforeUnmount() {
			EventBus.$off("toggle-todo", this.toggleTodo);
			EventBus.$off("delete-todo", this.deleteTodo);
			EventBus.$off("add-todo", this.addTodo);
			EventBus.$off("clear-completed", this.clearCompleted);
			EventBus.$off("toggle-all", this.toggleAll);
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
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}

	.todo-title {
		font-size: 28px;
		font-weight: 600;
		color: #2c3e50;
		text-align: center;
		margin-bottom: 30px;
	}
</style>
