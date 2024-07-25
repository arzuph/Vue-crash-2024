<template>
  <div>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
    />
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>
