<template>
  <v-container>
    <v-row>
      <v-col cols="6" >
        <LoginForm></LoginForm>
      </v-col>
      <v-col cols="6">
        <SignupForm></SignupForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
export default {
  components: {
    LoginForm,
    SignupForm,
  },
};
</script>

<style scoped>
.container{
  text-align:center;
}
</style>>
