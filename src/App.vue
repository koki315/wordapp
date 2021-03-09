<template>
  <v-app>
   <Header></Header>

    <v-main>
      <Forms v-if="!this.$store.state.idToken" />
      <router-view v-if="this.$store.state.idToken"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import  Header  from '@/components/Header.vue'
import Forms from "@/components/AuthForms";

export default {
  name: "App",
  components: {
    Forms,Header
  },
  created() {},
  
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
