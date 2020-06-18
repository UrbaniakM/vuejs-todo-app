<template>
  <div class="root">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :pattern="pattern"
      v-model="value"
    />
  </div>
</template>


<script>
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
    value: {
      required: true,
      type: String,
    },
    label: {
      required: false,
      type: String,
    },
    placeholder: {
      required: false,
      type: String,
    },
    pattern: {
      required: false,
      type: String,
    },
    type: {
      required: false,
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  display: flex;
  flex-direction: column;
}
</style>
