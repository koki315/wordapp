<template>
  <v-container>
    <v-card tile>
      <h3>{{ this.originalBody }}</h3>
      <h3>意味: <span>{{ this.originalMeaning }}</span></h3>
      <v-btn v-on:click="deleteWord(id)" >
        削除
      </v-btn>
      <v-form v-on:submit.prevent="update(id)">
        <v-text-field v-model="updatedBody" type="text" />
        <v-text-field v-model="updatedMeaning" type="text" />
        <v-btn type="submit">update</v-btn>
      </v-form>
    </v-card>
  </v-container>
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

<style scoped lang="scss">
.v-form{
  display: flex;
}
.v-text-field:nth-child(1){
  margin-right: 10px;
}
</style>
