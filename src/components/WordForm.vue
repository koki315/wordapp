<template>
  <v-container class="auth_form_container">
    <v-card>
      <v-form action="" v-on:submit.prevent="Add">
        <h2>単語登録</h2>
        <v-text-field type="text" v-model="body"  />
        <v-text-field type="text" v-model="meaning"  />
        <button v-on:submit.prevent>submit</button>
      </v-form>
    </v-card>
  </v-container>
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
    update() {},
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

<style scoped>
.auth_form_container {
  width: 100%;
}
</style>
