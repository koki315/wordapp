<template>
  <v-card>
    <p>{{ this.originalBody }}</p>
    <p v-if="answer">{{ this.originalMeaning }}</p>
    <p v-on:click="checkAnswer" v-if="!answer">意味</p>
    <p v-on:click="closeAnswer" v-if="answer">隠す</p>
  </v-card>
</template>

<script>
// import WordModel from "@/models/word.js";

export default {
  data() {
    return {
      words: [],
      originalBody: this.body,
      originalMeaning: this.meaning,
      answer:false
    };
  },
  props: {
    body: {
      type: String,
    },
    meaning: {
      type: String,
    },
    id: {
      type: String,
      requried: true,
    },
    afterAction: {
      type: Function,
    },
  },
  computed: {
    updateWordStatus: () => {
      return {
        originalBody: this.body,
        originalMeaning: this.meaning,
      };
    },
  },
  methods: {
   checkAnswer(){
     this.answer = true
   },
   closeAnswer(){
     this.answer  = false
   }
  },
  watch: {
    body: function() {
      console.log("body");
      this.originalBody = this.body;
    },
    meaning: function() {
      console.log("meaning");
      this.originalMeaning = this.meaning;
    },
  },
};
</script>

<style></style>