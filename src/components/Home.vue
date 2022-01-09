<template>
  <h1>List of posts</h1>

  <div>
    <div
      class="my-2 text-xl font-semibold text-teal-500"
      v-if="$apollo.queries.posts.loading"
    >
      Loading ...
    </div>

    <ul v-if="posts">
      <li v-for="post in posts.data" :key="post.id">
        <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Home",
  apollo: {
    posts: gql`
      query {
        posts {
          data {
            id
            title
            body
          }
        }
      }
    `,
  },
};
</script>

<style scoped>
</style>