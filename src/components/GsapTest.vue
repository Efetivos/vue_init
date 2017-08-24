
<template>
<div id="body">
    <div class="box"  id="red"></div>
    <div class="box"  id="blue"></div>
    <div class="box"  id="yellow"></div>
    <div id="btn-back" ><router-link to="/sobre">Go Back Home</router-link></div>  
</div>
</template>

<script type="script" src="./js/test.js"></script>

<style>
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
