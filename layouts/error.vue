<template>
  <section class="section section-404">
    <div class="container">
      <div class="row justify-content-md-center">
        <div v-if="error.statusCode === 404" class="section-title col col-md-8">
          <h1>Not Found</h1>
          <h2>
            The page you are looking for doesn't exist
          </h2>
        </div>
        <div v-else class="section-title col col-md-8">
          <h1>Something went wrong :(</h1>
          <h2>
            An unexpected error occurred, try again
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
