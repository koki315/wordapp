import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userEmail: null,
    nameOfChannel1: "channel1",
    nameOfChannel2: "channel2",
    nameOfChannel3: "channel3",
    words: [],
    shuffle:false,loading:false
  },
  getters: {
    idToken: (state) => state.idToken,
    userEmail: (state) => state.userEmail,
    nameOfChannel1: (state) => state.nameOfChannel1,
    nameOfChannel2: (state) => state.nameOfChannel2,
    nameOfChannel3: (state) => state.nameOfChannel3,
    words: (state) => state.words,
    
  },
  actions: {},
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
    updateUserEmail(state, userEmail) {
      state.userEmail = userEmail;
    },
    updateNameOfChannel1(state, nameOfChannel1) {
      state.nameOfChannel1 = nameOfChannel1;
    },
    updateNameOfChannel2(state, nameOfChannel2) {
      state.nameOfChannel2 = nameOfChannel2;
    },
    updateNameOfChannel3(state, nameOfChannel3) {
      state.nameOfChannel3 = nameOfChannel3;
    },
    updateWords(state, words) {
      state.words = words;
    },
    setShuffle(state, payload){
      state.shuffle = payload
    },
    setLoading(state, payload){
      state.loading = payload
    },
    resetState(state, idToken, userEmail) {
      console.log("reset");
      state.idToken = "";
      state.userEmail = "";
      state.nameOfChannel1 = "";
      state.nameOfChannel2 = "";
      state.nameOfChannel3 = "";
      state.words = []
      state.shuffle = false;
    },
    
  },
  plugins: [
    createPersistedState({
      key: "wordapp",
      storage: window.sessionStorage,
    }),
  ],
});
