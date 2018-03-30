<template>
<div>

<p>Olá {{ name }}, bom ter você aqui, a Efetivos é a maior monstra do mundo</p>
    <button @click="sobre"> Sobre </button>
    <button @click="services"> Services </button>
    <button @click="contato"> Contato </button>
<router-link :to="{path: '/'+name}" class="link-dynamic"> LINK DYNAMIC</router-link>

<input v-model="name" placeholder="seu nome">
</div>

</template>

<script>
export default {
  data (){
    return {
      name: ' '
    }
  },
  methods:{
    sobre:function (){
      this.name= 'sobre';      
    },
    services:function (){
      this.name= 'services';      
    },
    contato:function (){
      this.name= 'contato';      
    },
    home:function (){
      this.name= '';      
    }
  }
}
</script>

<style scoped >
body{
  background: #e2e2e2;
  display:flex;
  align-items: center;
  justify-content: center;
}

p {
  margin-top: 15vh;
  color: #a3a3a3;
}
.box{
    padding: 50px 50px;
    width: 80px;
    height: 80px;
}
#red{
    background-color: red;
}
#blue{
    position: fixed;
    background-color: blue;
}
#yellow{
    margin-top: 2000px;
    background-color: yellow;
}

.link-dynamic {
  color: red;
}


button {
  color: #fff;
}
</style>
