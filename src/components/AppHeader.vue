<template>
  <header>
    <h1>{{ title }}</h1>
    <BaseButton
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "AppHeader",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
