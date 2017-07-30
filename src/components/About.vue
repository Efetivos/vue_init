
<template>
<div>

<main id="body">

<!-- Line Vertical-->
<div class="linesVert" id="lineVert1"></div>
<div class="linesVert"	id="lineVert2"></div>

<!-- line Horizontal-->
<div class="linesHori" id="lineHori1"></div>
<div class="linesHori"	id="lineHori2"></div>


<section id="all">
<!-- ProjetoNmd-->
<section class="sectionProject" id="nmdSection">
	<div class="coverProject" id="nmdCover">
	  <div class="TitleProject" id="imgNmd">
	  <h1 id="h1Nmd">Adidas Nmd  <span>01</span> </h1></div>	 
	</div>
  <div id="exploreContainer">
		<div id="tracoExplore"></div>
	<p class="explore">explore</p>
	</div>
</section>

<!-- DescricaoProjeto-->
<section class="fullWidth" id="descricao">	
	<div id="descrProjeto">
		<p>Redesign: <span>Adidas NmD</span></p>
		<p>Categoria: <span>UX & UI Design</span></p>
		<p>Data: <span>Maio/2017</span></p>
	</div>
</section>

<!-- PhotoDecor-->	
<section class=" fullWidth">
	<div id="photoDecor"></div>
</section>

<!-- PhotoDecor-->	
<section class="fullWidth" id="videoProject">
  <div id="video"></div>	
</section>

<!-- imgsProjetos-->
<section class=" fullWidth" id="imgs">
	
<img src='images/01_HEADER.png' class="imgProject"/>
<img src="images/02.png" class="imgProject"/>
<img src="images/03.png" class="imgProject"/>
<img src="images/04.png" class="imgProject"/>
<img src="images/05.png" class="imgProject"/>
<img src="images/06.png" class="imgProject"/>
</section>

<section id="transition">

</section>



</section>
</main>
  
  
</div>
</template>

<style scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* InitiProjec*/

#body{
	background-color:#b3bdc4;
	overflow-x: hidden;
}


.sectionProject {
	height: 100vh;
	width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
}
.coverProject {
	background-color: #000000;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	justify-content: center;
	overflow: hidden;

}
#exploreContainer{
	position: absolute;
	display: flex;
	flex-direction: row;
	bottom: 20px;
	align-items: center;
}
#tracoExplore{
	position: absolute;
	width: 1px;
	height: 90px;
	background-color: #AABAC6;
}
.explore{
	margin-left: 10px;
	font-family: "josefin-sans";
	color: #FFFFFF;
	letter-spacing: 1px;
	text-align: center;
}
#imgNmd {
	background: url(images/NMD_Cover.png);
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
	background-position-x: center;
	background-position-y: center;

}


h1{	
	color: #FFFFFF;
	font-family: josefin-sans;
	font-style: normal;
	font-weight: 300;
	font-size: 34px;
	text-align: center;
	letter-spacing: 5px;
	cursor: pointer;
}

h1 span {
	color: #C3C3C3;
	font-size: small;
	padding-top: 0px;
}


/*Section DescProjecto*/
.fullWidth{
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
}

#descricao{
	height: 600px;
	background-color: #000000;
}
#descrProjeto{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	
	
}
#descrProjeto p {
	font-size: 20px;
	margin-left: 15vw;
	padding: 12px;
	font-family: "josefin-sans";
	color: #FFFFFF;
	color: rgba(255,255,255,1.00);
}
#descrProjeto p span {
	color: #b3bdc4;
}



/*Section photoDecor*/

#photoDecor{
	height: 1000px;
	background: transparent url(images/printsNmd.png) no-repeat center center;
    background-size: cover;
}

/*Section videoProject*/
#videoProject{
	height: 600px;
	background-color: #FFFFFF;
	align-items: center;
}
#video{
	width: 75%;
	height: 400px;
	background: transparent url(images/adidasNmd.jpg) no-repeat center center;
	background-size: cover;
}


/*Section imgProject*/

#imgs{
	background-color: #050505;
}
.imgProject {
	width: 100%;
	padding-top: 80px;
	max-width: 1600px;
	
}

/*Section Transition*/
#transition {
	width: 100%;
	height: 400px;

	background-color: #000000;
}




/*DeskTop BP*/
@media (min-width: 960px){
	
	h1{
		font-size: 45px;
	}
	
h1 span {
	font-size: 15px;
}
	
#videoProject{
	height: 760px;
}
	
#video {
	width: 75%;
	height: 500px;
}
	
#imgs{
	display: flex;
	flex-direction: column;
	align-items: center;
}

	.imgProject{
		margin-top: 120px;
		width: 85%;
		max-width: 1600px;
	}
	
	
	
	
	
	
}
</style>


