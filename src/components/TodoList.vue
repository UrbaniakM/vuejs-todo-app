<template>
  <ul v-if="todos.length">
    <TodoListItem v-for="todo in todos" :key="todo.text" :todo="todo" />
  </ul>
  <p v-else>Nothing left in the list.</p>
</template>

<script>
import TodoListItem from './TodoListItem';

export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
