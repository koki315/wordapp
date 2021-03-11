<template>
  <div>
    <v-container>
      
      <v-card tile>
        <Loading v-if="this.$store.state.loading"></Loading>
        <Word v-else
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
import  Loading from  '@/components/Loading';
export default {
  data() {
    return {
      words: this.$store.state.words,
    };
  },
  components: {
    Word,Loading
  },
  methods: {
    async fetchWords() {
      this.$store.commit('setLoading', true);
      const words = await WordModel.fetch(
        this.$store.state.userEmail,
        this.$route.params.channelId
      );
      console.log(words);
      this.$store.commit("updateWords", words);
      console.log(this.$store.state.words)
      this.words = this.$store.state.words;
      this.$store.commit('setLoading', false)
    },
  },
  computed: {
    wordsState: function() {
      console.log('computed');
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
