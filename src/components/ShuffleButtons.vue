<template>
  <v-container>
    <v-card>
       
      <v-btn v-on:click="stop" v-if="this.$store.state.shuffle">stop</v-btn>
      <v-btn v-on:click="start" v-else>shuffle</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props:{
    afterStop: {
      type: Function,
    },
  },
methods: {
    start() {
      this.$store.commit("setShuffle", true);
    },
    stop() {
      this.$store.commit("setShuffle", false);
      this.afterStop();
    },
  },
}
</script>

<style scoped lang="scss">
.v-card{
  text-align: center;
}
</style>

