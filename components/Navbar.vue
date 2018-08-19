<template>

  <nav class="navbar">
    <nuxt-link :to="{path:'/sub/a'}"> AAA </nuxt-link> |
    <nuxt-link :to="{path:'/sub/b'}"> BBB </nuxt-link> |
    <nuxt-link :to="{path:'/test'}"> test </nuxt-link> |
    <nuxt-link :to="{path:'/testMe'}"> test Me </nuxt-link> |
    <nuxt-link :to="{path:'/about'}">  About </nuxt-link> |
  </nav>


</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
  .navbar{
    min-height: 50px;
  }
  .navbar > a:hover{
    background-color: #555;
    color: #ccc;
    transition: 0.5s;
  }

  .navbar > a{
    padding: 10px;
    margin: 5px;
    border: 1px solid black;
  }
</style>