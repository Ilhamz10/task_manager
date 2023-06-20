<template>
  <div>
    <div @click="this.dialogShow = true" class="task">
      <div style="height: 85%">
        <h2>{{ task.title }}</h2>
        <p class="task_body">{{ task.body }}</p>
      </div>
      <div class="task_btns">
        <my-button @click.stop="this.changeDialog = true" class="changeBtn"
          >Change</my-button
        >
        <my-button @click="$emit('remove', task)" class="deleteBtn">
          Delete
        </my-button>
      </div>
    </div>
    <my-dialog v-model:show="dialogShow">
      <h2>{{ task.title }}</h2>
      <p class="modal_task_body">{{ task.body }}</p>
    </my-dialog>
    <my-dialog v-model:show="changeDialog">
      <form @submit.prevent class="form">
        <my-input
          :value="this.task.title"
          v-model="task.title"
          type="text"
          placeholder="Task title"
        />
        <textarea
          v-model="task.body"
          class="change_task_body"
          placeholder="add multiple lines"
        ></textarea>
        <my-button @click="this.changeDialog = false" class="btn"
          >Close</my-button
        >
      </form>
    </my-dialog>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialogShow: false,
      changeDialog: false,
    };
  },
};
</script>

<style scoped>
.task {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin-top: 10px;
  display: flex;
  width: 200px;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

.task_btns .deleteBtn {
  background: red;
}

.task_btns {
  display: flex;
  justify-content: space-between;
}

.task_btns .changeBtn {
  background: rgb(0, 119, 255);
}

.task_body {
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.modal_task_body {
  max-width: 400px;
}

.form {
  display: flex;
  flex-direction: column;
}

.change_task_body {
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
  background: red;
}
</style>
