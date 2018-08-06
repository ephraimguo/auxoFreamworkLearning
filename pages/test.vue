<template>
  <div>
    <h1>Test Vue</h1>
    <navbar/>
  </div>
</template>

<script>
  import Navbar from "~/components/Navbar.vue"
  export default {
    name: "test.vue",
    layout: "myLayout",
    components:{
      Navbar
    }
  }
</script>

<style scoped>

</style>