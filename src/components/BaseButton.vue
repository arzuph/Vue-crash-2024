<template>
  <button @click="onClick" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      default: "Click Me",
    },
    color: {
      type: String,
      default: "blue",
    },
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>
