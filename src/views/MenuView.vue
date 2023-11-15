<template>
    <div class="">
          <h1>Меню</h1>
          <ol>
            <li v-for="p in FP" :key="p.id">
              <el-button  type="text" @click="open(p.id)">{{ p.name }}</el-button></li>
          </ol>

         <table class="w3-table">
            <tr v-for="m in Menu" :key="m.id">
                <td>{{ m.name }}</td> 
                <td>{{ m.price }}</td> 
                <td>{{ m.type }}</td> 
                <td><el-button @click="del(m.id)"><i class="el-icon-delete"></i></el-button></td>
            </tr>
         </table>










          <el-drawer
        size="40%"
            title="I am the title"
            :visible.sync="drawer"
            :with-header="false">
            <span></span>
            <div class="w3-padding">
                <el-input class="w3-margin" v-model="new_menu.name" placeholder="Название "></el-input>
                <el-input class="w3-margin" v-model="new_menu.img_url" placeholder="Ссылка на изображение"></el-input>
                <el-input class="w3-margin" v-model="new_menu.foodprovider_id" placeholder=""></el-input>
                <el-input class="w3-margin" v-model="new_menu.description" placeholder="Описание" type="textarea"></el-input>
                <el-input class="w3-margin" v-model="new_menu.type" placeholder="Тип еды"></el-input>
                <el-input class="w3-margin" v-model="new_menu.price" placeholder="цена" type="number"></el-input>
                <el-button @click="add()">Добавить</el-button>
            </div>  


        </el-drawer>
    </div>
</template>

<script>
import {store} from '../store'
export default {
  data(){
    return{
       drawer:false,
       new_menu:{
          description:'',
          foodprovider_id:'',
          img_url:'',
          name:'',
          type:'',
          price:''
       }
    }
  },
  computed:{
    FP(){
            return store.state.food_provider
        },
    Menu(){
      return store.state.menu
    }    
  },
  methods:{
    open(id){
      this.drawer = true
        this.new_menu.foodprovider_id = id
    },
    add(){
       this.new_menu.price = parseInt(this.new_menu.price)
       store.dispatch('addMenu', this.new_menu)
    },
    del(id){
      store.dispatch('delMenu',id)
    }
  }
}
</script>

<style>

</style>