<template>
  <li class="root">
    <h6 class="title">{{ todo.text }}</h6>
    <span class="remove-button" v-html="xMark" @click="clickedRemoveButton"></span>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      xMark: '&#x2716;',
    };
  },
  methods: {
    clickedRemoveButton() {
      this.$emit('clickedRemoveButton', this.todo.text);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title {
  margin-right: 8px;
}
.remove-button {
  padding: 8px;
  background: #CCCCCC;
  border-radius: 50%;
}
</style>
