<template>
    <div>
        <v-row align="center" justify="space-between">
            <v-col align="align" justify="center">
                <strong style="margin: 16px 0px 16px 20px">{{ this.text }}</strong>
            </v-col>
            <v-col align="right" justify="center" style="flex: justify-content">
                <p style="margin: 16px 20px 16px 0px">{{ this.number }}</p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  props: ['text', 'number']
}
</script>
