<template>
    <div class="">
          <h1>Меню</h1>
          <ul>
            <li v-for="m in menu" :key="m.name">
            {{ m.name }}
            </li>
          </ul>
    </div>
</template>

<script>
export default {
  data(){
    return{
       
    }
  }
}
</script>

<style>

</style>