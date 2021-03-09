<template>
  <div v-if="this.$store.state.idToken" >
     <p  v-on:click="logout">logout</p>
      <router-link to="/channel1">{{
        this.$store.state.nameOfChannel1
      }}</router-link>
      <router-link to="/channel2">{{
        this.$store.state.nameOfChannel2
      }}</router-link>
      <router-link to="/channel3">{{
        this.$store.state.nameOfChannel3
      }}</router-link>
  </div>
</template>

<script>
import user from "@/models/user.js";
export default {
methods: {
    logout() {
      console.log("logout", this.$store.state.nameOfChannel1);
      user.update(
        this.$store.state.userEmail,
        this.$store.state.nameOfChannel1,
        this.$store.state.nameOfChannel2,
        this.$store.state.nameOfChannel3
      );
      this.$store.commit("resetState");
    },
  },
}
</script>

<style>

</style>