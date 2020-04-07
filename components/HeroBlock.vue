<template>
  <ContentBlock class="hero">
    <div class="row">
      <div class="col-12">
        <h1>{{ heading }}</h1>
        <h2>{{ subheading }}</h2>
        <slot></slot>
      </div>
    </div>
  </ContentBlock>
</template>

<script>
import ContentBlock from '@/components/ContentBlock.vue'

export default {
  components: {
    ContentBlock
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    subheading: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
