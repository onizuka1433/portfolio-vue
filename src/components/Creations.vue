<script setup>
import anime from "@/assets/images/anime.jpg";
import creationSushi from "@/assets/images/creationSushi.jpg";
import jeuxVideo from "@/assets/images/jeuxVideo.jpg";
</script>

<template>
  <div class="section">
    <div class="boxed text-center">
      <h2>Mes réalisations</h2>
      <div class="flex wrap gap20 space-between">
        <div class="w32 realisation">
            <a href="/creations" target="_blank">
            <img :src="creationSushi" alt="Site de sushi">
            <h3>Site de sushi</h3>
          </a>
        </div>
        <div class="w32 realisation">
            <a href="/creations" target="_blank">
            <img :src="anime" alt="Site de culture animé">
            <h3>Site de culture animé</h3>
          </a>
        </div>
        <div class="w32 realisation">
            <a href="/creations" target="_blank">
            <img :src="jeuxVideo" alt="Site de jeux vidéo">
            <h3>Site de jeux vidéo</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.flex{
    display: flex;
    justify-content:space-around;
    
}
.gap20{
    gap: 20px;
}

.wrap{
    flex-wrap: wrap;
}
.space-between{
justify-content: space-between;
}
.w32{
    width: 32%;
}
.realisation{
    height: auto;
    aspect-ratio: 1/1;
    position: relative;
}

.realisation h3{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 2rem;
    width:max-content;
    opacity: 0;
    transition: .4s ease;
}

.realisation a{
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
}

.realisation img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
    transition: .4s ease;
}

.realisation:hover img{
    filter:brightness(90%);
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 1);
 
    
}

.realisation:hover h3{
    opacity: 1;


}
</style>
