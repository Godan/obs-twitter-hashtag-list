<template>
  <v-card max-width="500" class="mx-auto">
    <v-toolbar color="indigo" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Inbox</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list three-line>
      <v-list-item v-for="post in posts" :key="post.id">
        <v-list-item-avatar>
          <v-img :src="post.user.profile_background_image_url"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="post.user.name"></v-list-item-title>
          <v-list-item-subtitle v-text="post.text"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    axios.get('http://localhost:8000/api').then((response) => {
      console.log(response)
      this.posts = response.data.statuses
    })
  },
  created() {
    setInterval(() => {
      axios.get('http://localhost:8000/api').then((response) => {
        console.log(response)
        this.posts = response.data.statuses
      })
    }, 10000)
  },
}
</script>
