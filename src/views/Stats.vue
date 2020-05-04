<template>
  <v-content>
    <v-container>
      <v-column>
        <div v-for="s in stats" :key=s.text>
          <stat :text="s.text" :number="s.number"></stat>
          <v-divider></v-divider>
        </div>
      </v-column>
    </v-container>
  </v-content>
</template>

<script>
import Stat from '@/components/Stat.vue'

export default {
  data () {
    return {
      stats: [
        {
          text: 'Last used',
          number: '03.05.2020'
        },
        {
          text: 'Used this year',
          number: 3
        },
        {
          text: 'Used total',
          number: 10
        },
        {
          text: 'Most popular heat',
          number: '41°C'
        },
        {
          text: 'Average fill time',
          number: '48 minutes'
        },
        {
          text: 'Average empty time',
          number: '13 minutes'
        }
      ]
    }
  },
  components: {
    Stat
  }
}
</script>
