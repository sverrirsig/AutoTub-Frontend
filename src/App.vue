<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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

<style scoped>

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
      from {
        transform: translateY(-30px);
        opacity: 0;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    @keyframes slide-out {
      from {
        transform: translateY(0px);
        opacity: 1;
      }
      to {
        transform: translateY(-30px);
        opacity: 0;
      }
    }
</style>
