<template>
<body><main id="body">

<!-- Section Efetivos-->
<section class="fullWidth" id="sobre">
	<div id="Efetivos"><h1 id="efetTitle"><span id="E">E</span><span id="f">f</span><span id="e">e</span><span id="t">t</span><span id="i">i</span><span id="v">v</span><span id="o">o</span><span id="s">s</span></h1></div>
	<div id="photoSobre"></div>
	<div id="descSobre"><p>Sabe tudo aquilo que você espera do seu projeto?<br>Então, ele pode ser mais!</p></div>
	<div id="sejaEfetivos"><h2>#SejaEfetivos</h2></div>	
</section>


<!-- Section Services-->
<section id="services">
  <div id="somosEsp"><div id="somosE"><h2>SOMOS ESPECIALISTAS EM CRIAR:</h2></div></div>
  
 <div class="containerMasterArt">
<!-- Article 01-->
  <article class="containerArticle">
  	<p class="number">01</p>
  	<div class="wrapPhoto"><div class="photoService"></div></div>
  	<div class="titleService"><h1 class="titleS">WEBSITES</h1></div>
  	<div class="boxDesc">
 	  	<div class="descService">
  		  <p>Com<span> reconhecimentos e premiações internacionais</span> somos referências em desenvolvimento de websites em todas categorias: Corporativo, Institucional, 	Blog e E-commerce.</p>
  		</div>
  		<div class="btnService"><p class="btn">VER SITES</p></div>
  	</div>  	
  </article>
  
<!-- Article 02-->
  <article class="containerArticle">
  	<p class="number">02</p>
  	<div class="wrapPhoto"><div class="photoService"></div></div>
  	<div class="titleServiceVid"><h1 class="titleS">EDIÇÃO DE VÍDEOS</h1></div>
  	<div class="boxDesc">
 	  	<div class="descService">
  		  <p>Trazendo resultados para divulgação da sua marca em animações gráficas, seja em vídeos para Internet ou  para TV’s corporativas.</p>
  		</div>
  		<div class="btnService"><p class="btn">VER VÍDEOS</p></div>
  	</div>  	
  </article>

		
<!-- Article 03-->		
  <article class="containerArticle">
  	<p class="number">03</p>
  	<div class="wrapPhoto"><div class="photoService"></div></div>
  	<div class="titleServiceVid"><h1 class="titleS">MÍDIAS SOCIAIS</h1></div>
  	<div class="boxDesc">
 	  	<div class="descService">
  		  <p>Precisando de mais resultados nas redes sociais? Vamos te ajudar com isso!</p>
  		</div>
  		<div class="btnService"><p class="btn">VER MÍDIAS</p></div>
  	</div>  	
  </article>
				

<!-- Article 04-->		
  <article class="containerArticle">
  	<p class="number">04</p>
  	<div class="wrapPhoto"><div class="photoService"></div></div>
  	<div class="titleServiceVid"><h1 class="titleS">DESIGN GRÁFICO</h1></div>
  	<div class="boxDesc">
 	  	<div class="descService">
  		  <p>Direção artística especializada em composições cleans e minimalistas. Sempre levamos aquele toque de sofisticação e modernidade nos projetos desenvolvidos.</p>
  		</div>
  		<div class="btnService"><p class="btn">VER DESIGNS</p></div>
  	</div>  	
  </article>
</div>
</section> <!-- Section Services-->
<section id="callTo">
<div class="boxCall">
	<p>Queremos ajudar no seu projeto, então não se acanhe.</p>
	<p><router-link to="/"><span>Clique aqui</span></router-link> e nos conte mais sobre ele.</p>
	<div id="smile"></div>
</div>	
</section>
<div id="topoContainer"><div id="topoBtn"></div></div>





</main></body>
</template>

<script>
export default { 
	  created() {
        //Scrolls to top when view is displayed
        window.scrollTo(0, 0);
    },
 beforeRouteLeave(to, from, next) {
				var tlTrans = new TimelineMax({onComplete:next}).to('#body', 2 ,{opacity:0, backgroudColor:'#000'})
      }
}
</script>

<style src="./css/style_sobre.css"></style>