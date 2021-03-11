<template>
  <v-container>
    <v-card>
      <h3>{{ this.originalBody }}</h3>
      <h3 v-if="answer">{{ this.originalMeaning }}</h3>
      <v-btn v-on:click="checkAnswer" v-if="!answer">意味</v-btn>
      <v-btn v-on:click="closeAnswer" v-if="answer">隠す</v-btn>
    </v-card>
  </v-container>
</template>

<script>
// import WordModel from "@/models/word.js";

export default {
  data() {
    return {
      originalBody: this.body,
      originalMeaning: this.meaning,
      answer: false,
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
    checkAnswer() {
      this.answer = true;
    },
    closeAnswer() {
      this.answer = false;
    },
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
