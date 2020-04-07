<template>
  <footer>
    <div class="container">
      <div class="inner">
        <div class="d-none d-sm-block">
          <p class="left">
            <span class="copyright">&copy; {{ year }}</span>
          </p>
        </div>
        <div class="d-none d-sm-block">
          <p class="right">
            <span class="social">
              <LinkExternal href="https://www.facebook.com/chainpoint" class="facebook"></LinkExternal>
              <LinkExternal href="https://twitter.com/chainpnt" class="twitter"></LinkExternal>
            </span>
          </p>
        </div>
        <p class="small-date d-block d-sm-none">&copy; {{ year }}</p>
        <LinkExternal href="https://tierion.com" class="site-by d-none d-sm-block">site by Tierion</LinkExternal>
      </div>
    </div>
  </footer>
</template>

<script>
import LinkExternal from '@/components/LinkExternal.vue'

export default {
  components: {
    LinkExternal
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style></style>
