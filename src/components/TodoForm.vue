<template>
  <form @submit.prevent="onSubmit" class="root">
    <Input
      id="todo-name"
      :value="value"
      type="text"
      @submit="onSubmit"
      @change="onChange"
      @keypress="onKeypress"
    />
  </form>
</template>

<script>
import Input from './Input';

export default {
  components: {
    Input
  },
  data() {
    return {
      value: ''
    };
  },
  props: {},
  methods: {
    onSubmit() {
      /** TODO: Handle adding new entry */
    },
    onChange(todoName) {
      this.value = todoName;
    },
    onKeypress(key, event) {
      if (this.value.length > 15) {
        event.preventDefault();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  display: flex;
  flex-direction: column;
}
</style>
