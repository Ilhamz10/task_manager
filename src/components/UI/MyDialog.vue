<template>
  <div v-if="show" @click="hideDialog" class="dialog">
    <div @click.stop class="dialog_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.dialog{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
}

.dialog_content{
    margin: auto;
    background: white;
    padding: 20px;
    min-width: 300px;
    min-height: 50px;
    border-radius: 20px;
}
</style>
