<script setup>
import moshiSushiImg from "@/assets/images/moshiSushiImg.png";


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
    <header>
      <div class="header">
        <h1>MOSHI MOSHI SUSHI</h1>
        <img :src="moshiSushiImg" alt="Sushi" />
        <br />
        <h2>Le spécialiste du sushi</h2>
      </div>
  
      <div class="navigation">
          <nav class="navbar">
              <ul>
                  <li><a href="#about" @click="scrollToSection('section1')"><h3>Accueil</h3></a></li>
                  <li><a href="#skills" @click="scrollToSection('section2')"><h3>Menu</h3></a></li>
                  <li><a href="#creations" @click="scrollToSection('section3')"><h3>A propos</h3></a></li>
                  <li><a href="#contact" @click="scrollToSection('section4')"><h3>Contact</h3></a></li>
              </ul>
          </nav>
      </div>
  
    </header>
  
    <body>
      <div class="accueil" id="section1">
        <h2>Yōkoso!</h2>
        <img class= "presentation"src="@/assets/images/creationSushi.jpg" alt="Sushi" />
        <h2>Bienvenue chez nous !</h2>
        <p>Découvrez nos délicieux sushi préparés avec amour.</p>
      </div>
  
      <div class="menu" id="section2">
    <h2>Notre Menu</h2>
    <ul>
        <li class="menu-item">
            <h2>Sushi</h2>
            <div class="menu-images">
                <img class="menu-sushi" src="@/assets/images/menuSushi.jpg" alt="SushiA" />
                <img class="menu-sushiB" src="@/assets/images/menuSushiB.jpg" alt="SushiB" />
            </div>
            <!-- Ajoutez d'autres détails ou descriptions si nécessaire -->
        </li>
        <li class="menu-item">
            <h2>Sashimi</h2>
            <div class="menu-images">
                <img class="menu-sashimi" src="@/assets/images/menuSashimi.jpg" alt="SashimiA" />
                <img class="menu-sashimiB" src="@/assets/images/menuSashimiB.jpg" alt="SashimiB" />
            </div>
            <!-- Ajoutez d'autres détails ou descriptions si nécessaire -->
        </li>
        <li class="menu-item">
            <h2>Maki</h2>
            <div class="menu-images">
                <img class="menu-maki" src="@/assets/images/menuMaki.jpg" alt="makiA" />
                <img class="menu-makiB" src="@/assets/images/menuMakiB.jpg" alt="MakiB" />
            </div>
            <!-- Ajoutez d'autres détails ou descriptions si nécessaire -->
        </li>
    </ul>
    <a href="/notFound" target="_blank">
    <button type="reserver"><h3>Reserver une table</h3></button>
    </a>
    
</div>
      <div class="about" id="section3">
        <h2>À propos de nous</h2>
        <p>Nous sommes un restaurant familial passionné par la cuisine japonaise.</p>
        <p>Venez découvrir nos spécialités préparées avec des ingrédients frais et de qualité.</p>
      </div>
  
      <div class="contact" id="section4">
        <h2>Contactez-nous</h2>
        <p>Adresse : 123 rue du Sushi, Ville, Pays</p>
        <p>Téléphone : +123 456 789</p>
        <p>Email : info@moshimoshi.com</p>
      </div>
    </body>
  
    <footer>
      <p>&copy; 2024 Restaurant de Sushi gastronimique</p>
    </footer>
  </template>

<style scoped>
body {
font-family: 'Roboto', sans-serif;
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: black;
color: white;
}

header {
background-color: black;
color: white;
margin-top: 10rem;
text-align: center;
  
}

.navbar {
background-color: black;
color: black;
text-align: center;
position: fixed;
width: 100%;
top:0;
  }

nav ul {
list-style: none;
padding: 15px;
margin: 15px;
display: flex;
justify-content: space-evenly;
width: 100%;
}

nav ul li {
margin: 0 10px;
}

nav ul li a {
text-decoration: none;
color: white;
font-weight: bold;
}

nav ul li h3:hover {
color: red;
transition: color 0.4s ease, transform 0.3s ease;
transform: scale(1.3);
}

.header {
width: 100%;
height: 100%;
object-fit: cover;
}

.header img {
border-radius: 50%;
border: 15px solid red;
}
.presentation {
border-radius: 50%;
width: 400px; /* Ajustez la taille de l'image selon vos besoins */
height: 400px; /* Ajustez la taille de l'image selon vos besoins */
margin-bottom: 20px; /* Espacement en bas de l'image */

}

.menu-sushi, .menu-sushiB, .menu-sashimi, .menu-sashimiB, .menu-maki, .menu-makiB {
border-radius: 50%;
width: 400px; /* Ajustez la taille de l'image selon vos besoins */
height: 400px; /* Ajustez la taille de l'image selon vos besoins */
margin-bottom: 100px;
border: 5px solid black;

}

.menu-images {
    display: flex;
    
    
}

footer {
background-color: black;
color: black;
padding: 20px;
text-align: center;
position: fixed;
bottom: 0;
width: 100%;
}

.accueil, .menu, .about, .contact {
padding: 50px 20px;
text-align: center;
}

.menu-images {
    display: flex;
    justify-content: space-evenly;
    
}

.menu ul {
list-style: none;
}

.accueil p{
color: black;
}

.about p{
color: black;
}
.contact p{
color: black;
}

.contact {
margin-bottom: 100px; 
}


button[type="reserver"] {
  background-color: #000000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


button :hover{
color: red;
transition: color 0.4s ease, transform 0.3s ease;
transform: scale(1.1);
}
</style>
