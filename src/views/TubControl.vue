<template>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="fill text-center">
            <v-progress-circular width="20" size="500" :value="progress" style="width: 80%" color="#2980b9">
              <strong style="color: #000; font-size: 40px">{{ displayStatus }}</strong>
            </v-progress-circular>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            align="center"
            justify="center"
          >
            <v-col class="text-center">
              <v-btn class="rounded success" style="width: 80%" @click="fill">Fill</v-btn>
            </v-col>
            <v-col class="text-center">
              <v-btn class="rounded" style="width: 80%; background-color: #34495e; color: white" @click="stop">Stop</v-btn>
            </v-col>
            <v-col class="text-center">
              <v-btn class="rounded info" style="width: 80%" @click="empty">Empty</v-btn>
            </v-col>
          </v-col>
          <v-divider vertical="true"></v-divider>
          <v-col
            align="center"
            justify="center"
          >
            <v-col
              align="center"
              justify="center"
            >
              <v-btn class="rounded error" style="width: 80%" @click="heatUp"><v-icon>mdi-plus</v-icon></v-btn>
            </v-col>
            <v-row
              align="center"
              justify="center"
            >
              <strong style="text-size: 20px">{{ desiredHeat }}°C</strong>
            </v-row>
            <v-col
              align="center"
              justify="center"
            >
              <v-btn class="rounded info" style="width: 80%" @click="heatDown"><v-icon>mdi-minus</v-icon></v-btn>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
export default {
  data: () => ({
    state: 'Emptying',
    progress: 0,
    desiredHeat: 40
  }),
  computed: {
    displayStatus () {
      if (this.state === 'Filling' && this.progress === 100) {
        return 'Ready'
      }

      if (this.state === 'Emptying' && this.progress === 0) {
        return 'Empty'
      }

      return this.state
    }
  },
  methods: {
    fill () {
      if (this.state === 'Filling') {
        return
      }

      this.state = 'Filling'
      var instance = this
      var refreshId = setInterval(() => {
        if (instance.state !== 'Filling' || instance.progress === 100) {
          clearInterval(refreshId)
          return
        }
        instance.progress += 20
      }, 1000)
    },
    stop () {
      this.state = 'Stopped'
    },
    empty () {
      if (this.state === 'Emptying') {
        return
      }

      this.state = 'Emptying'
      var instance = this
      var refreshId = setInterval(() => {
        if (instance.state !== 'Emptying' || instance.progress === 0) {
          clearInterval(refreshId)
          return
        }
        instance.progress -= 20
      }, 1000)
    },
    heatUp () {
      this.desiredHeat += 1
    },
    heatDown () {
      this.desiredHeat -= 1
    }
  }
}
</script>
