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
<style>
a {
  color: #fff !important;
}
main{
  padding: 50px 50px  0!important;
}
/* .container{
  width: 80%;
} */
.v-main__wrap{
  padding: 0 50px 0;
}
.v-card {
  padding: 20px;
  transition: 0.5s;
}
</style>
