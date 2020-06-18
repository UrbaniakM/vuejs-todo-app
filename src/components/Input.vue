<template>
  <div class="root">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :pattern="pattern"
      :value="value"
      @input.prevent="onChange"
      @keypress="onKeypress"
      v-on:keyup.enter="submit"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: [String, Number]
    },
    label: {
      required: false,
      type: String
    },
    placeholder: {
      required: false,
      type: String
    },
    pattern: {
      required: false,
      type: String
    },
    type: {
      required: true,
      type: String
    }
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
    onChange(event) {
      this.$emit('change', event.target.value);
    },
    onKeypress(event) {
      const key = event.key || String.fromCharCode(event.keyCode);
      this.$emit('keypress', key, event);
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
