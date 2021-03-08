import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import  Top from  '@/views/Top.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/:channelId',
    name:'ChannelId',
    component:Top,
  }
]

const router = new VueRouter({
  routes
})

export default router
