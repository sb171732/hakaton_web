<template>
    <div class="">
          <h2>Поставщики еды</h2>
        <ul>
            <li v-for="f in FP" :key="f.id">
                {{ f.name }}
                <img width="50px" :src="f.logo_path" alt="">
            </li>
        </ul>

    </div>
</template>

<script>
import {store} from '../store'
export default {
    computed:{
        FP(){
            return store.state.food_provider
        }
    }
}
</script>

<style>

</style>