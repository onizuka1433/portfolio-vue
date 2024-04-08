<script setup>
//import anime from "@/assets/images/anime.jpg";
//import creationSushi from "@/assets/images/creationSushi.jpg";
//import jeuxVideo from "@/assets/images/jeuxVideo.jpg";
</script>

<template>
  <section id="section3">
    <div class="section">
      <div class="boxed text-center">
        <h2>Mes réalisations</h2>
        <Modal :isVisible="showModal" @update:isVisible="showModal = $event">
      <template #header>
        <h3>{{ currentTitle }}</h3>
      </template>
      {{currentMessage}}
      <a href="{{ currentLink }}" target="_blank">{{ currentLinkTitle }} </a>
      {{ currentTechnology }}
      <template #footer>
        <button @click="showModal = false">Fermer</button>
      </template>
    </Modal>

        <div class="flex wrap gap20 space-between">
          <div class="w32 realisation" @click="getModalData('sushi')">

              <img :src="creationSushi" alt="Site de sushi">
              <h3>Site de sushi</h3>

          </div>

          <div class="w32 realisation" @click="getModalData('anime')">

              <img :src="anime" alt="Site de culture animé">
              <h3>Site de culture animé</h3>

          </div>

          <div class="w32 realisation" @click="getModalData('jeuxVideo')">

              <img :src="jeuxVideo" alt="Site de jeux vidéo">
              <h3>Site de jeux vidéo</h3>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import anime from "@/assets/images/anime.jpg";
import creationSushi from "@/assets/images/creationSushi.jpg";
import jeuxVideo from "@/assets/images/jeuxVideo.jpg";

import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal
  },

methods: {
  getModalData(name) {
    console.log(name);
    this.showModal = true;
    if (name === "anime") {
      this.currentTitle = "anime";
      this.currentMessage = "manga";
      this.currentLink = "link"
      this.currentTechnology = "html"
      this.currentLinkTitle = "linkTitle"
    }
    if (name === "sushi") {
      this.currentTitle = "sushi";
      this.currentMessage = "cuisine";
      this.currentLink = "link"
      this.currentTechnology = "css"
      this.currentLinkTitle = "linkTitle"
    }
    if (name === "jeuxVideo") {
      this.currentTitle = "jeux video";
      this.currentMessage = "gaming";
      this.currentLink = "link"
      this.currentTechnology = "vuejs"
      this.currentLinkTitle = "linkTitle"
    }
  }
},

  data() {
    return {
      currentLinkTitle : "",
      currentLink:"",
      currentTechnology:"",
      currentTitle: "",
      currentMessage: "",
      showModal: false,
      anime: anime,
      creationSushi: creationSushi,
      jeuxVideo: jeuxVideo
    }
  }
}
</script>

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
    box-shadow: 15px 15px 15px rgba(0, 0, 0);
 
    
}

.realisation:hover h3{
    opacity: 1;


}
</style>
