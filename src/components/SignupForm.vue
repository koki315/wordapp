<template>
  <div>
    <h1>signup</h1>
    <form v-on:submit.prevent="Signup">
      <div>
        <label for="email">メールアドレス:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">パスワード:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">登録</button>
    </form>
  </div>
</template>

<script>
import axios from "@/axios-for-auth.js";
import user from "@/models/user.js";
export default {
  components: {},
  data: () => {
    return {
      email: "",
      password: "",
      signin: false,
    };
  },
  methods: {
    async Signup() {
      const response = await axios.post(
        "/accounts:signUp?key=AIzaSyA3KUKZ0t5RSfAtUlHmXKyQw2SXG-da6Eg",
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        }
      );

      
      this.$store.commit("updateIdToken", response.data.idToken);
      this.$store.commit("updateUserEmail", response.data.email);
      const userData = {
        email: response.data.email,
        id: response.data.localId,
      };
      this.$store.commit("updateNameOfChannel1", 'channel1');
      this.$store.commit("updateNameOfChannel2", 'channel2');
      this.$store.commit("updateNameOfChannel3", 'channel3');
      user.addUser(userData, this.$store.state.nameOfChannel1, this.$store.state.nameOfChannel2, this.$store.state.nameOfChannel3);
      this.email = "";
      this.password = "";
      this.$router.push('/channel1');
    },
  },
};
</script>

<style></style>
