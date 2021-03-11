<template>
  <v-container class="main-container">
    <v-row>
      <v-col cols="4">
        <SideMenu :shuffleStopped ="fetchWords" />
      </v-col>
      <v-col cols="8">
        <Shuffle v-if="this.$store.state.shuffle" />
        <WordList v-else />
      </v-col>
    </v-row>
  </v-container>
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
      this.fetchWords();
    },
  },
   watch: {
    wordsState: function() {
      console.log('word');
      this.words = this.$store.state.words;
    },
  },
};
</script>

<style>
.main-container {
  display: flex;
}
</style>
