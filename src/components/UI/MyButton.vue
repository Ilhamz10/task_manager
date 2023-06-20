<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  background: green;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
}
</style>
