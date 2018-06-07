<template>  
	<div>
		<div class="Carousel" >
			<ul class="show" >
				<li v-for="ms in msg" :key="ms.id">
					<img :src="'./static/images/' + ms.data" alt="">
				</li>
			</ul>
			<ul class="tab" >
				<li class="on">1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>
		</div>
		<timer ref="timer1" ></timer>
	</div>
</template>  
    
<script>  
	import timer from './Timer.vue';
    export default {  
        name: "child1",  
        props: ["msg"],
        components: {  
			timer:timer
		},
        methods: {  
            handleParentClick(e) {  
			
				this.$refs.timer1.setTask(function(){
					console.log("hello world!");
				})
				this.$refs.timer1.start();
            },
            ccon(e) {
				this.$refs.timer1.stop();
			}
		},
        mounted:function(){
			
			var body = document.getElementsByTagName('body')[0];
			var style=document.createElement("style");
			style.id="css";
			body.appendChild(style);
			var css=document.getElementById("css");
			var Carousel=document.getElementsByClassName('Carousel')[0];
			var show=document.getElementsByClassName('show')[0];
			var showli=show.getElementsByTagName('li');
			var tabli=document.querySelectorAll('.Carousel .tab li');
			var num=0;

			var timer=this.$refs.timer1;
			timer.setTask(run);
			timer.setUnit(1000);
			timer.start();
			Carousel.onmousemove=function(){timer.stop();}
			Carousel.onmouseout=function(){timer.start()};
			/* var timer=setInterval(run,20000);

			Carousel.onmousemove=function(){clearInterval(timer);}
			Carousel.onmouseout=function(){timer=setInterval(run,20000);}; */

			for(var i=0;i<tabli.length;i++){
				tabli[i].index=i;
				tabli[i].onmousemove=function(){
						num=i;
					css.innerHTML=".Carousel ul.show{transform: rotateX("+(this.index*90)+"deg);}";
					for(var j=0;j<tabli.length;j++){
						tabli[j].className="";
					}
					this.className="on";
				}
			}

			
			function run(){
				num++;
				num%=4;
				css.innerHTML=".Carousel ul.show{transform: rotateX("+(num*90)+"deg);}";
				for(var i=0;i<tabli.length;i++){
					tabli[i].className="";
				}
				tabli[num].className="on";
			}
		}
    }  
</script>  

<style>
    *{margin: 0;padding: 0;list-style: none;}

		.Carousel{
			width: 600px;
			height: 300px;
			margin:100px auto;
			perspective: 800px;}
		.Carousel ul.show{
			width: 100%;
			height: 100%;
			transform-style: preserve-3d;
			transform-origin: center center -150px;
			transition: 1s;
			}
		.Carousel ul.show li{
			width: 100%;
			height: 100%;
			position: absolute;
		}
		.Carousel ul.show li:nth-child(1){
			background: red;
		}
		.Carousel ul.show li:nth-child(2){
			background: blue;
			transform: translateZ(-300px) rotateZ(-180deg);
		}
		.Carousel ul.show li:nth-child(3){
			top: -300px;
			background: green;
			transform-origin: bottom;		
			transform: rotateX(90deg);
		}
		.Carousel ul.show li:nth-child(4){
			top: 300px;
			background: yellow;
			transform-origin: top;
			transform: rotateX(-90deg);
			
		}
		.Carousel ul.show li img{
			width: 100%;
			height: 100%;
		}
		.Carousel ul.tab{
			width: 120px;
			height: 25px;
			position: absolute;
			right: 5px;
			bottom: 5px;
			display: flex;
		}
		.Carousel ul.tab li{
			width: 20px;
			height: 20px;
			background: gray;
			margin:auto;
			text-align: center;
			color: white;
			border-radius: 50%;
			cursor: pointer;
		}
		.Carousel ul.tab li.on{
			background: red;
			color: yellow;
		}
</style>

