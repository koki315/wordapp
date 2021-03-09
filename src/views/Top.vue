<template>
  <div class="main-container">
    <SideMenu :startShuffle="shuffleStart" :stopShuffle="shuffleStop" />
    <WordList v-if="!shuffle"/>

    <Shuffle v-else />
  </div>
</template>
<script>
import SideMenu from "@/components/SideMenu.vue";
import WordModel from "@/models/word.js";
import WordList from "@/components/WordList";
import Shuffle from "@/components/Shuffle.vue";
export default {
  components: {
    SideMenu,
    WordList,
    Shuffle,
  },
  data() {
    return {
      shuffle: false,
    };
  },
  created() {
    console.log(
      "created",
      this.$store.state.userEmail,
      this.$route.params.channelId
    );
    this.fetchWords();
  },

  methods: {
    async fetchWords() {
      const words = await WordModel.fetch(
        this.$store.state.userEmail,
        this.$route.params.channelId
      );
      this.$store.commit("updateWords", words);
    },
    shuffleStart() {
      this.shuffle = true;
    },
    shuffleStop() {
      this.shuffle = false;
    },
  },
};
</script>

<style>
.main-container {
  display: flex;
}
</style>
