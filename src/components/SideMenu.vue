<template>
  <div class="menu_container">
    
    <WordForms />
    <RenameForms />
    <button v-on:click="start">shuffle</button>
    <button v-on:click="stop">stop</button>
  </div>
</template>

<script>
import RenameForms from "@/components/ChannelRenameForms.vue";
import WordForms from "@/components/WordForm.vue";
export default {
  components: {
    RenameForms,
    WordForms,
  },
  props: {
    startShuffle: {
      type: Function,
    },
    stopShuffle: {
      type: Function,
    },
  },
  methods: {
    start() {
      this.startShuffle();
    },
    stop() {
      this.stopShuffle();
    },
  },
};
</script>

<style scoped>
.menu_container{
  height: 100vh;
}
</style>>