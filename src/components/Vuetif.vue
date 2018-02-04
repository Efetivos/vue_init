<template>
<div>

<p>Olá {{ name }}, bom ter você aqui, a Efetivos é a maior monstra do mundo</p>

<input v-model="name" placeholder="seu nome">
</div>
</template>

<script>
export default {
  data (){
    return {
      name: ''
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
  color: #212121;
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

</style>
