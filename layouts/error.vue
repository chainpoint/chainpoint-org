<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">NOT FOUND</h1>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  layout: 'default-error'
}
</script>
