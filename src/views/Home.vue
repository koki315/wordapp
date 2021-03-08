<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import Channel from "@/models/channel.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      channels: [],
    };
  },
  async created() {
    const Channel1 = await Channel.fetchChannel1(this.$store.state.userEmail);
    console.log(Channel1);
  },
};
</script>
