<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar: NavBar
  }
}
</script>
