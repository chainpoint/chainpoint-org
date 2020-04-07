<template>
  <div class="language-json syntax-highlighted-container">
    <slot></slot>
  </div>
</template>

<script>
import prismjs from 'prismjs'
import 'prismjs/components/prism-json'
import 'prismjs/themes/prism-coy.css'

export default {
  mounted() {
    prismjs.highlightAll()
  }
}
</script>

<style></style>
