<template>
<div class="body">
<mymenu></mymenu>

<div class="bg"></div>
<div id="div-test"></div>

<h1> INNER 2</h1>

</div>
</template>

<script>
export default {
     created() {
       //Scrolls to top when view is displayed
   			window.scrollTo(0, 0)
   			window.document.title = "FASHION 2  | EFETIVOS  "
   },
   mounted () {
     TweenMax.to('a',1,{color:'#ff0000'})
   }
}
</script>