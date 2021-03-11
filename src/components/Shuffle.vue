<template>
  <div>
    <v-container>
      <v-card>
        <ShuffledWord
          v-for="(word, index) in words"
          :key="index"
          :body="word.body"
          :meaning="word.meaning"
          :id="word.id"
        />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ShuffledWord from "@/components/ShuffledWord";
export default {
  components: {
    ShuffledWord,
  },
  data() {
    return {
      words: this.$store.state.words,
    };
  },
  created() {
    const array = this.$store.state.words;
    let newArray = [];
    while (array.length > 0) {
      let n = array.length;
      let k = Math.floor(Math.random() * n);
      console.log(n, k);
      newArray.push(array[k]);
      array.splice(k, 1);
    }
    this.words  = newArray
  },
};
</script>

<style></style>
