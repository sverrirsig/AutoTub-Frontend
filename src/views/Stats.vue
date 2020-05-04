<template>
  <v-content>
    <v-container>
      <h1>Interesting stats such as: Number of times hot tub has been used, when it was last used etc.</h1>
      <v-row no-gutters>
        <stat v-for="s in stats" :key=s.text :text="s.text" :number="s.number"></stat>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Stat from '@/components/Stat.vue'

export default {
  data () {
    return {
      stats: []
    }
  },
  components: {
    Stat
  }
}
</script>
