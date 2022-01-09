<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted, ref } from "vue";

const posts = ref([]);

onMounted(() => {
  fetch("http://127.0.0.1:8000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
        posts {
         data {
           id
           title
           body
         }
        }
      }`,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      posts.value = result.data.posts.data;
    });
});


function handleMutation() {
  fetch("http://127.0.0.1:8000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation {
        createPostResolver(user_id:4,title: "New Post from Vue", body: "New Post Body randomized") {
          id
          title
          body
        }
      }`,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      alert("Post created");
    });
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <ul>
    <!-- list of posts -->
    <li v-for="post in posts" :key="post.id">{{ post.title }}></li>
  </ul>
  <button @click="handleMutation">Mutation</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
