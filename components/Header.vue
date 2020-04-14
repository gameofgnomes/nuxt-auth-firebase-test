<template>
  <header class="header py-2 shadow">
    <div class="container mx-auto flex justify-between items-center">
      <div class="logo">Logo</div>
      <nuxt-link to="/signin" class="login">Sign In</nuxt-link>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .header {
    width: 100%;
  }
</style>
