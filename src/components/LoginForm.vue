<template>
  <div>
    <h1>login</h1>
    <form>
      <!-- <form @submit.prevent="registerUser"> -->
      <div>
        <label for="email">メールアドレス:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">パスワード:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit" @click="Login">登録</button>
    </form>
  </div>
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
   async Login () {
     const  response =  await axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyA3KUKZ0t5RSfAtUlHmXKyQw2SXG-da6Eg",
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        
          console.log(response);
          this.$store.commit("updateIdToken", response.data.idToken);
          this.$store.commit("updateUserEmail", response.data.email);
        
      this.email = "";
      this.password = "";
      const channels = await  User.fetch(this.$store.state.userEmail);
      console.log(channels);
       this.$store.commit("updateNameOfChannel1", channels.nameOfChannel1);
      this.$store.commit("updateNameOfChannel2", channels.nameOfChannel2);
      this.$store.commit("updateNameOfChannel3", channels.nameOfChannel3);
    },
  },
};
</script>

<style></style>
