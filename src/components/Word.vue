<template>
  <v-card>
    <p>{{ this.originalBody }}</p>
    <p>{{ this.originalMeaning }}</p>
    <button v-on:click="deleteWord(id)">
      削除
    </button>
    <form action="" v-on:submit.prevent="update(id)">
      <input v-model="updatedBody" type="text" />
      <input v-model="updatedMeaning" type="text" />
      <button>update</button>
    </form>
  </v-card>
</template>

<script>
import WordModel from "@/models/word.js";

export default {
  data() {
    return {
      words: [],
      updatedBody: "",
      updatedMeaning: "",
      originalBody: this.body,
      originalMeaning: this.meaning,
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
    async update(id) {
      const newWord = await WordModel.update({
        id: id,
        body: this.updatedBody,
        meaning: this.updatedMeaning,
        email: this.$store.state.userEmail,
        channel: this.$route.params.channelId,
      });
      this.updatedBody = "";
      this.updatedMeaning = "";
      this.afterAction();
    },
    async deleteWord(id) {
      await WordModel.delete(
        this.$store.state.userEmail,
        this.$route.params.channelId,
        id
      );
      this.afterAction();
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
