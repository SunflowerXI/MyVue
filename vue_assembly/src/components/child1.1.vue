<template>  
    <div id="box">
        <div :class="'plane '+ms.class" v-for="ms in msg" :key="ms.id" >
            <!-- <img  alt=""> -->
            <img :src="'./static/images/' + ms.data" alt="">
        </div>
        <div class="child">
             {{msg}}
        </div>
       
    </div>  
</template>  
    
<script>  
    export default {  
        name: "child1",  
        props: ["msg"],
        
        methods: {  
            handleParentClick(e) {  
                console.info(e)  
            }  
        }
    }  
</script>  

<style>
    .plane {
        width: 400px;
        height: 400px;
        position: absolute;
    }
    .front {
        transform: translateZ(200px);
    }
    .top {
        transform: rotateX(90deg);
        transform-origin: center center 200px;
    }
    .bottom {
        transform: rotateX(-90deg);
        transform-origin: center center -200px;
    }
    #box {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        margin: 50px auto;
        animation: play 30s infinite linear;
        perspective: 800px;
    }
    @keyframes play {
        to {
            transform: rotateX(-360deg) ;
        }
    }
</style>
