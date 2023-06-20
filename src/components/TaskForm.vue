<template>
  <div>
    <form @submit.prevent class="form">
      <my-input v-model="task.title" type="text" placeholder="Task title" />
      <textarea
        class="task_body"
        v-model="task.body"
        placeholder="Start typing"
      ></textarea>
      <my-button @click="createTask" class="btn">Create task</my-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createTask() {
      this.task.id = Date.now();
      this.$emit("create", this.task);
      this.task = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.task_body{
  width: 400px;
  padding: 10px 15px;
  border: 1px solid gray;
  margin-top: 10px;
  border-radius: 5px;
  height: 200px;
}

.btn {
  align-self: flex-end;
  margin-top: 10px;
}
</style>
