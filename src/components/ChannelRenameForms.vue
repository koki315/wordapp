<template>
  <v-container class="auth_form_container">
    <v-card elevation="5" tile>
      <v-form>
        <div class="channel1Rename">
          <p>チャンネル名変更</p>
          <v-text-field
            type="text"
            v-model="nameOfChannel1"
            :placeholder="this.$store.state.nameOfChannel1"
          />
          <v-btn v-on:click="submitChannel1">submit</v-btn>
        </div>
        <div class="channel2Rename">
          <p>チャンネル名変更</p>
          <v-text-field
            type="text"
            v-model="nameOfChannel2"
            :placeholder="this.$store.state.nameOfChannel2"
          />
          <v-btn v-on:click="submitChannel2">submit</v-btn>
        </div>
        <p>チャンネル名変更</p>
        <div class="channel3Rename">
          <v-text-field
            type="text"
            v-model="nameOfChannel3"
            :placeholder="this.$store.state.nameOfChannel3"
          />
          <v-btn v-on:click="submitChannel3">submit</v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nameOfChannel1: "",
      nameOfChannel2: "",
      nameOfChannel3: "",
    };
  },
  methods: {
    submitChannel1() {
      console.log(1);
      this.$store.commit("updateNameOfChannel1", this.nameOfChannel1);
      this.nameOfChannel1 = "";
    },
    submitChannel2() {
      console.log(2);
      this.$store.commit("updateNameOfChannel2", this.nameOfChannel2);
      this.nameOfChannel2 = "";
    },
    submitChannel3() {
      console.log(3);
      this.$store.commit("updateNameOfChannel3", this.nameOfChannel3);
      this.nameOfChannel3 = "";
    },
  },
};
</script>

<style scoped>
.auth_form_container{
  width: 100%;
}

</style>

