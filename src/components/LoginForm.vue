<template>
  <v-container class="auth_form_container">
    <v-card elevation="5" tile>
      <h1>ログイン</h1>

      <v-form @submit.prevent="Login">
        <div class="form_input">
          <label for="email">メールアドレス:</label>
          <v-text-field type="email" id="email" v-model="email" />
        </div>
        <div class="form_input">
          <label for="password">パスワード:</label>
          <v-text-field type="password" id="password" v-model="password" />
        </div>
        <v-btn elevation="2" x-large type="submit">登録</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import axios from "@/axios-for-auth.js";
import User from "@/models/user.js";
export default {
  data: () => ({
    email: "",
    password: "",
  }),

  methods: {
    async Login() {
      const response = await axios.post(
        "/accounts:signInWithPassword?key=AIzaSyA3KUKZ0t5RSfAtUlHmXKyQw2SXG-da6Eg",
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        }
      );

      console.log(response);
      this.$store.commit("updateIdToken", response.data.idToken);
      this.$store.commit("updateUserEmail", response.data.email);

      this.email = "";
      this.password = "";
      const channels = await User.fetch(this.$store.state.userEmail);

      this.$store.commit("updateNameOfChannel1", channels.nameOfChannel1);
      this.$store.commit("updateNameOfChannel2", channels.nameOfChannel2);
      this.$store.commit("updateNameOfChannel3", channels.nameOfChannel3);
      this.$router.push("/channel1");
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 40px;
}
form {
  text-align: left;
}
.auth_form_container{
  width: 100%;
}
.form_input {
  margin-bottom: 40px;
}

</style>
