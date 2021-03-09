<template>
  <div>
    <v-container>
      <v-card>
        <Word
          v-for="(word, index) in words"
          :key="index"
          :body="word.body"
          :meaning="word.meaning"
          :id="word.id"
          :afterAction="fetchWords"
        />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Word from "@/components/Word";
import WordModel from "@/models/word.js";
export default {
  data() {
    return {
      words: this.$store.state.words,
    };
  },
  components: {
    Word,
  },
  methods: {
    async fetchWords() {
      const words = await WordModel.fetch(
        this.$store.state.userEmail,
        this.$route.params.channelId
      );
      console.log(words);
      this.$store.commit("updateWords", words);
      console.log(this.$store.state.words)
      this.words = this.$store.state.words;
    },
  },
  computed: {
    wordsState: function() {
      return this.$store.getters["words"];
    },
  },
  watch: {
    $route: function() {
      this.fetchWords();
    },
    wordsState: function() {
      console.log('word')
      this.words = this.$store.state.words;
    },
  },
};
</script>

<style></style>
