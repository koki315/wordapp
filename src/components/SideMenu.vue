<template>
  <v-container class="menu_container">
    <WordForms />
    <RenameForms />
    <ShuffleButtons :afterStop='shuffleStopped'/>
  </v-container>
</template>

<script>
import RenameForms from "@/components/ChannelRenameForms.vue";
import WordForms from "@/components/WordForm.vue";
import  ShuffleButtons  from  '@/components/ShuffleButtons.vue'
export default {
  components: {
    RenameForms,
    WordForms,ShuffleButtons
  },
  props: {
    shuffleStopped: {
      type: Function,
    },
   
  },
  
};
</script>

<style scoped>
.menu_container {
  height: 100vh;
}

</style>
