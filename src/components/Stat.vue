<template>
    <div>
        <v-col :key="text">
            <v-card
            class="pa-2"
            outlined
            tile
            >
                <v-card-title>{{ text }}</v-card-title>
                <v-card-text>{{ number }}</v-card-text>
            </v-card>
        </v-col>
        <v-responsive
            v-if="n === 2"
            :key="`width-${n}`"
            width="100%"
        ></v-responsive>
    </div>
</template>

<script>
export default {
  props: ['text', 'number']
}
</script>
