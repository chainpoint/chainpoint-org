<template>
  <header>
    <div class="container">
      <nuxt-link to="/"><h1 class="logo" to="/">Chainpoint</h1></nuxt-link>
      <LinkExternal href="http://github.com/chainpoint" class="github"></LinkExternal>
    </div>
  </header>
</template>

<script>
import LinkExternal from '@/components/LinkExternal.vue'

export default {
  components: {
    LinkExternal
  }
}
</script>

<style></style>
