<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <p v-if="this.$store.state.idToken" v-on:click="logout">logout</p>
      <router-link to="/channel1" >{{
        this.$store.state.nameOfChannel1
      }}</router-link>
      <router-link to="/channel2" >{{
        this.$store.state.nameOfChannel2
      }}</router-link>
      <router-link to="/channel3" >{{
        this.$store.state.nameOfChannel3
      }}</router-link>
    </v-app-bar>

    <v-main>
      <Forms v-if="!this.$store.state.idToken" />
      <router-view v-if="this.$store.state.idToken"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Forms from "@/components/AuthForms";
import user from "@/models/user.js";
export default {
  name: "App",
  components: {
    Forms,
  },
  created() {},
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
};
</script>
<style scoped>
input {
  border: #000 1px solid;
}
a {
  color: #fff !important;
}
</style>
