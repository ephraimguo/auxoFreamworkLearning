<template>
  <div class="bg">
    <hr>
    <nuxt/>
    <MyFooter/>
    <hr>
  </div>
</template>

<script>
  import MyFooter from '~/components/Footer.vue'
  export default {
    components:{
      MyFooter
    },
    name: "my-layout",

  }
</script>

<style scoped>
  .bg{
    background-color: aquamarine;
  }

</style>