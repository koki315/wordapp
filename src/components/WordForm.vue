<template>
  <div>
    <form action="" v-on:submit.prevent="Add">
      <input type="text" v-model="body" />
      <input type="text" v-model="meaning" />
      <button>submit</button>
    </form>
  </div>
</template>

<script>
import Word from "@/models/word.js";
export default {
  data() {
    return {
      body: "",
      meaning: "",
    };
  },
  methods: {
    async Add() {
      const word = await Word.add({
        email: this.$store.state.userEmail,
        channel: this.$route.params.channelId,
        body: this.body,
        meaning: this.meaning,
      });

      this.body = "";
      this.meaning = "";
      const updatedWords = await Word.fetch(
        this.$store.state.userEmail,
        this.$route.params.channelId
      );
      
      this.$store.commit("updateWords", updatedWords);
    },
  },
};
</script>

<style></style>
