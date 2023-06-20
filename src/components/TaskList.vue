<template>
  <div class="task_list" v-show="tasks.length > 0">
    <transition-group name="task_list">
      <task-item
        @remove="$emit('remove', task)"
        :key="task.id"
        :task="task"
        v-for="task in tasks"
      />
    </transition-group>
  </div>
  <h2 v-show="tasks.length === 0" style="color: green; text-align: center">
    You don't have any tasks.
  </h2>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  components: {
    TaskItem,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.task_list-item {
  display: inline-block;
  margin-right: 10px;
}
.task_list-enter-active,
.task_list-leave-active {
  transition: all 0.4s ease;
}
.task_list-enter-from,
.task_list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.task_list-move {
  transition: transform 0.8s ease;
}

.task_list{
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
</style>
