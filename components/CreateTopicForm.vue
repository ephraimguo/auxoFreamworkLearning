<template lang="html">
  <div class="topic-form">
    <input type="text" v-model="title" value=""> <br>
    <textarea v-model="content" cols="30" rows="10"></textarea> <br>
    <button @click="create()">Create Topic</button>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    data(){
      return {
        title:'',
        content:''
      }
    },
    methods:{
      async create(){
        this.$emit("createX",{title: this.title, content: this.content});
        this.title = "";
        this.content = "";
      }
    }
  }
</script>

<style lang="css" scoped>
  .topic-form{
    background-color: #dbe1ec;
  }
</style>
