<template>
  <div>
    <div class="channel1Rename">
      <input type="text"  v-model="nameOfChannel1" />
    <button v-on:click='submitChannel1'>submit</button>
    </div>
    <div class="channel2Rename">
      <input type="text"  v-model="nameOfChannel2" />
    <button v-on:click='submitChannel2'>submit</button>
    </div>
    <div class="channel3Rename">
      <input type="text"  v-model="nameOfChannel3" />
    <button v-on:click='submitChannel3'>submit</button>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return  {
      nameOfChannel1:'',nameOfChannel2:'',nameOfChannel3:'',
    }
  },
   methods:{
    submitChannel1(){
      console.log(1);
      this.$store.commit("updateNameOfChannel1", this.nameOfChannel1);
      this.nameOfChannel1 = ''
    },
     submitChannel2(){
      console.log(2);
      this.$store.commit("updateNameOfChannel2", this.nameOfChannel2);
      this.nameOfChannel2 = ''
    },
     submitChannel3(){
      console.log(3);
      this.$store.commit("updateNameOfChannel3", this.nameOfChannel3);
      this.nameOfChannel3 = ''
    }
  }
}
</script>

<style>

</style>