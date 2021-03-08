<template>
  <div>
    <h1>Top</h1>
    <ul>
      <li v-for="(word, index) in words" :key="index">{{ word.body }}</li>
    </ul>
    <SideMenu />
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import Word from "@/models/word.js";
export default {
  components: {
    SideMenu,
  },
  data() {
    return {
      words: [],
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
      const words = await Word.fetch(
        this.$store.state.userEmail,
        this.$route.params.channelId
      );
      this.$store.commit("updateWords", words);
      this.words = this.$store.state.words;
    },
  },
  computed:{
    wordsState:function(){
      return  this.$store.getters['words']
    }
  },
  watch: {
    $route: function() {
      this.fetchWords();
    },
    wordsState:function(){
      console.log('wordsupdate');
      this.fetchWords();
    }
  },
};
</script>

<style></style>
