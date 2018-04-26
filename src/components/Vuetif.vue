<template>
<div>

<p>Olá {{ name }}, EFETIVOS</p>
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
        this.$router.push({ path: '/sobre' })
        console.log('alert')
    },
    home:function (){
      this.name= '';      
    }
  }
}
</script>

<style scoped >
@font-face {
    font-family: 'atheneregular';
    src: url('./css/athene-webfont.eot');
    src: url('./css/athene-webfont.eot?#iefix') format('embedded-opentype'),
         url('./css/athene-webfont.woff2') format('woff2'),
         url('./css/athene-webfont.woff') format('woff'),
         url('./css/athene-webfont.svg#atheneregular') format('svg');
    font-weight: normal;
    font-style: normal;

}

body{
  background: #e2e2e2;
  display:flex;
  align-items: center;
  justify-content: center;
}

p {
  margin-top: 15vh;
  color: #a3a3a3;
  font-family: 'atheneregular';
  color: #fff;
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
