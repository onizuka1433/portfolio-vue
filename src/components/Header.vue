<script setup>
import background from "@/assets/images/background.jpg"
</script>

<template>
    <div>
      <nav class="navbar">
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#creations">Réalisations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  
      <div class="slider">
        <img :src="background" class="slider-background" />
        <div class="slider-content">
          <h1>Dina LIM</h1>
          <p>Développeur full-stack junior</p>
        </div>
      </div>
    </div>
  </template>

<script>


</script>

<style scoped>
.navbar {
  background-color: #333;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar ul li {
  display: inline;

}

.navbar ul li a {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
}

.navbar ul li a:hover {
  background-color: #555;
}

.slider{
    width:100%;
    min-height:80vh;
    aspect-ratio:16/9;
    background:#000;
}

.slider-background{
    width:100%;
    height:100%;
    object-fit: cover;
    filter: brightness(50%);
}
.slider-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
</style>
