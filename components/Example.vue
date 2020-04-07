<template>
  <div>
    <pre><code>{{ JSON.stringify(json, null, 2) }}</code></pre>
  </div>
</template>

<script>
export default {
  props: {
    json: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style></style>
