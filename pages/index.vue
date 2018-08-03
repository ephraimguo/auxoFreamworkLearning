
<template>
  <section class="container">
    <create-user-form @create="create"/>
    <create-topic-form @createX="createTopic"/>
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1>Topic Posted</h1>
    <ul class="users">
      <li v-for="(topic, index) in $store.state.topic.topics" :key="index" class="user">
        <div class="topic">
          <h4>{{ topic.title }}</h4>
          <p> {{topic.content}}</p>
        </div>
      </li>
    </ul>

    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in $store.state.users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: user.id }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>

  </section>
</template>


<script>
import axios from '~/plugins/axios';
import domain from '~/plugins/domain';
import CreateUserForm from '~/components/CreateUserForm.vue';
import CreateTopicForm from '~/components/CreateTopicForm.vue';

export default {
  components:{
    CreateUserForm,
    CreateTopicForm
  },
  async fetch ({ store, params }) {
    let users = (await axios.get('/users')).data;
    let topics = (await axios.get('/topics')).data;
    store.commit('init', users);
    store.commit('topic/init', topics);
  },
  methods:{
    async create(name){
      const {data} = await axios.post("/domain/User/create",{name});
      this.$store.commit('create', {id:data.id,name}); // 调用store中的create mutater
    },
    async createTopic({title, content}){
      console.log(title, content);
      const {data} = await domain.create("Topic", {title, content});
      this.$store.commit("topic/create", {title, content});
    }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}

  .topic{
    background-color: #00B7FF;
    border: 1px solid red;
  }
</style>
