<template>
  <div class="header-container">
    <h2>Word Book</h2>
    <div class="links_container">
      <router-link
        to="/channel1"
        v-if="this.$store.state.idToken"
        tag="h2"
        class="router-link"
        >{{ this.$store.state.nameOfChannel1 }}</router-link
      >
      <router-link
        to="/channel2"
        v-if="this.$store.state.idToken"
        tag="h2"
        class="router-link"
        >{{ this.$store.state.nameOfChannel2 }}</router-link
      >
      <router-link
        to="/channel3"
        v-if="this.$store.state.idToken"
        tag="h2"
        class="router-link"
        >{{ this.$store.state.nameOfChannel3 }}</router-link
      >
      <v-btn
        elevation="2"
        small
        v-on:click="logout"
        v-if="this.$store.state.idToken"
        class="logout_btn"
        >ログアウト</v-btn
      >
    </div>
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
};
</script>

<style scoped>
.header-container {
  padding: 30px 50px 30px;
  display: flex;
  align-items: center;
  color: #fff;
  background: #0a0a23;
}
.links_container {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.router-link {
  list-style: none;
  cursor: pointer;
  margin-right: 10px;
  opacity: 0.7;
  transition-duration: 500ms;
}
.router-link:hover {
  opacity: 1;
}
.router-link-active {
  opacity: 1;
  transform: scale(1.1);
}
.logout_btn {
  background: #fecc4c !important;
}
</style>
