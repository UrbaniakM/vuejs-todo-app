<template>
  <div id="app">
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import TodoList from './components/TodoList';

const initialTodos = [
  {
    text: 'Write simple To-Do app in Vue'
  },
  {
    text: 'Write simple To-Do app in SwiftUI for iOS'
  },
  {
    text: 'Write simple To-Do app in Angular'
  },
  {
    text: 'Write simple To-Do app in Kotlin for Android'
  }
];

export default {
  components: {
    TodoList
  },
  data() {
    return {
      todos: initialTodos
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
