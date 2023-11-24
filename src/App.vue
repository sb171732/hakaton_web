<template>
   <div id="app">
    <el-button type="text" v-if="user!=null" @click="logout()">выход</el-button>
    <el-menu :default-active="activeIndex" router mode="horizontal">
      <el-menu-item index="1" route="/">Поставщики</el-menu-item>
      <el-menu-item index="2" route="/menu">Меню</el-menu-item>
      <el-menu-item index="3" route="/zac">Заказы</el-menu-item>
      
    </el-menu>
        <router-view></router-view>
   </div>
</template>

<script>
import {store} from './store'
export default {
  name: 'app',
  data() {
    return{
      activeIndex:'1',
     
    }
  },
  computed:{
    user(){
      return store.state.user
    }
  },
  methods:{
    logout(){
      store.dispatch('logout')
    }
  },
  watch:{
    user(to){
      console.log(to)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
