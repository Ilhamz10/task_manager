<template>
  <div>
    <h1>All tasks</h1>
    <my-input
      placeholder="Search..."
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
    />
    <div class="app_btns">
      <my-button @click="dialogShow = true"> Create task </my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="options"
      />
    </div>
    <my-dialog v-model:show="dialogShow">
      <h2>Create task</h2>
      <task-form @create="createTask" />
    </my-dialog>
    <task-list
      v-if="!isTaskLoading"
      @remove="removeTask"
      :tasks="sortedAndSearchedTasks"
    />
    <h2 v-else style="color: green; text-align: center">Loading...</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      dialogShow: false,
    };
  },
  methods: {
    ...mapActions({
      fetchTasks: "task/fetchTasks",
    }),
    ...mapMutations({
      setSearchQuery: "task/setSearchQuery",
      setSelectedSort: "task/setSelectedSort",
    }),

    createTask(task) {
      this.tasks.push(task);
      this.dialogShow = false;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    removeTask(task) {
      this.$store.commit(
        "task/setTasks",
        [...this.tasks].filter((t) => t.id !== task.id)
      );
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    showDialog() {
      this.dialogShow = true;
    },
  },
  mounted() {
    this.fetchTasks();
  },
  computed: {
    ...mapState({
      tasks: (state) => state.task.tasks,
      dialogShow: (state) => state.task.dialogShow,
      isTaskLoading: (state) => state.task.isTaskLoading,
      selectedSort: (state) => state.task.selectedSort,
      searchQuery: (state) => state.task.searchQuery,
      options: (state) => state.task.options,
    }),
    ...mapGetters({
      sortedTasks: "task/sortedTasks",
      sortedAndSearchedTasks: "task/sortedAndSearchedTasks",
    }),
  },
};
</script>

<style scoped>
.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
