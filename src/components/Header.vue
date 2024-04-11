<template>
    <div>
        <nav class="navbar">
      <ul>
        <li><a href="#about" @click="scrollToSection('section1')"><h4>À PROPOS</h4></a></li>
        <li><a href="#skills" @click="scrollToSection('section2')"><h4>COMPETENCES</h4></a></li>
        <li><a href="#creations" @click="scrollToSection('section3')"><h4>REALISATIONS</h4></a></li>
        <li><a href="#contact" @click="scrollToSection('section4')"><h4>CONTACT</h4></a></li>
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
  
  <script setup>
  import background from "@/assets/images/background.jpg";

  function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
  </script>
  
  <style scoped>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%; 
  }
  
  .navbar {
    background-color: rgba(0, 0, 0, 0.5);
    max-width: 100%; 
    height: px;
    position: fixed;
    width: 100%;
    z-index: 999; 
  }
  
  .navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex; 
    justify-content: space-around;
    align-items: center; 
    height: 100%; 
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
    transition: .4s ease;
    transition: transform 0.3s ease;
    transform: scale(1.1);
  }
  
  .slider {
    width: 100%;
    aspect-ratio: 16/9;
    background: #000;
  }
  
  .slider-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
  }
  
  .slider-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  </style>
  