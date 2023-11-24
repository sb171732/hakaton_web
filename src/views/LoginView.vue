<template>
    <div class="about">
      <h1>Авторизация</h1>
      <el-input v-model="authInput.txtEmail" class="w3-margin" placeholder="Email"></el-input>
      <el-input v-model="authInput.txtPassword" class="w3-margin" placeholder="Пароль" type="password"></el-input>
      <el-button @click="signIn()" type="success">Войти</el-button>
      <el-button @click="signUp()" type="warning">Зарегистрироваться</el-button>
      <hr>
      {{ user }}
      <span v-if="user==null">null</span>
    </div>
</template>
<script>
import {store} from '../store'
export default{
  data(){
    return{
      authInput: {
                    txtEmail: 'sauronkan@gmail.com',
                    txtPassword: '123123'
                }
    }
  },
  computed:{
    user(){ return store.state.user },
    auth_error(){ return store.state.auth_error },
  },
  methods:{
    signIn(){
      store.dispatch('login', { email:this.authInput.txtEmail, password:this.authInput.txtPassword })
    }
  },
  created(){
    // store.dispatch('getLoginStatus')
  },
  watch:{
    user(to){
      if (this.user!=null) 
        if (to.user.emailVerified) this.$router.push('/fp')
        
      
    },
  auth_error(to){
     if (this.auth_error!=null){
      
      // console.log(to)
      if (to =='auth/too-many-requests') { 
        this.$message.error('Превышено количество запросов, подождите!');
        store.commit('set_error','')
      }
      // if (to =='auth/too-many-requests') { this.$message.error('Превышено количество запросов, подождите!'); }
      // switch(to) {
      //   case 'auth/too-many-requests': this.$message.error('Превышено количество запросов, подождите!');
      //     break
      //   // case 'auth/too-many-requests': this.$message.error('Превышено количество запросов, подождите!');
      //   default: this.$message.error('Ошибка!');

      // }
     }
  }
  }
}

</script>
<style>
   .about{

     text-align: center;
     width: 50%;
     margin: auto;
   }
</style>