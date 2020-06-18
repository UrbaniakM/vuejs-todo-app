<template>
  <div>
    <TodoForm />
    <ul v-if="todos.length">
      <TodoListItem v-for="todo in todos" :key="todo.text" :todo="todo" />
    </ul>
    <p v-else>Nothing left in the list.</p>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';

export default {
  components: {
    TodoListItem,
    TodoForm
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
