<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div class="k-my-component">{{ msg }}</div>
</template>

<style scoped>
.k-my-component {
  color: #888;
}
</style>
