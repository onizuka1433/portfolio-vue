<script setup>
import html5 from "@/assets/images/html5.png"
import css3 from "@/assets/images/css3.png"
import js from "@/assets/images/js.png"
import vueJs from "@/assets/images/vueJs.png"

</script>

<template>
    <div class="section dark">
      <div class="boxed text-center">
        <h2>Mes compétences</h2>
        <div class="flex">
          <div class="w25 skill">
            <img :src="html5">
            <h3>HTML</h3>
          </div>
          <div class="w25 skill">
            <img :src="css3">
            <h3>CSS 3</h3>
          </div>
          <div class="w25 skill">
            <img :src="js">
            <h3>Java script</h3>
          </div>
          <div class="w25 skill">
            <img :src="vueJs">
            <h3>Vue JS</h3>
          </div>
        </div>
      </div>
    </div>
  </template>


<style scoped>

.dark{
    background:#000 ;
    color: #fff;
}
.section{
    padding: 100px 0;
}
.boxed{
    max-width:100%;
    margin-inline: auto;
}

.text-center{
    text-align: center;
}
.skill{
background: #fff;
border-radius: 15px;
padding: 40px;
box-sizing: border-box;

}

.skill img{
width: 100px;
height: 100%;
aspect-ratio: 1/1;
object-fit: contain;
}

.skill h3{
    color: #000;
}

.w25{
    width: 15%;
    margin: 15px;
}
.flex{
    display: flex;
    justify-content:space-around;
    
}

</style>