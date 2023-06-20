<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event){
        this.$emit('update:modelValue', event.target.value)
    } 
  }
};
</script>

<style scoped>
.input {
  padding: 10px 15px;
  border: 1px solid gray;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
