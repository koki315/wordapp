<template>
  <div>
    <h1>shuffle</h1>
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
}
</script>

<style>

</style>