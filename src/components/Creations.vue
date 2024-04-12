<script setup>

</script>

<template>
  <section id="section3">
    <div class="section">
      <div class="boxed text-center">
        <h2>Mes réalisations</h2>
        <Modal :isVisible="showModal" @update:isVisible="showModal = $event" :style="{ top: modalTop, left: modalLeft }">
          <template #header>
            <h3>{{ currentTitle }}</h3>
          </template>
          <div class="modal-content">
            <br>
            <img :src="modalImageSrc" alt="Image modale" class="modal-image">
            <br>
            <br>
            {{ currentMessage }}
            <br>
            <br>
            <a v-if="currentLink" :href="'/:pathMatch(.*)*'" target="_blank">{{ currentLinkTitle }}</a>
            <div>
              <br>{{ currentTechnology }}<br>
            </div>
            <div>
              <br>{{ currentDate }} <br>
            </div>
            <div>
                  {{ currentCategory }} <br>
            </div>
          </div>
          <template #footer>
            <br>
            <button @click="showModal = false">Fermer</button>
          </template>
        </Modal>

        <div class="flex wrap gap20 space-between">
          <div class="w32 realisation" @click="getModalData('sushi', creationSushi)">
            <img :src="creationSushi" alt="Site de sushi">
            <h3>Site de sushi</h3>
          </div>

          <div class="w32 realisation" @click="getModalData('anime', anime)">
            <img :src="anime" alt="Site de culture animé">
            <h3>Site de culture animé</h3>
          </div>

          <div class="w32 realisation" @click="getModalData('jeuxVideo', jeuxVideo)">
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
import notFound from "@/assets/images/notFound.jpg"

import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal
  },

methods: {
  getModalData(name, modalImageSrc) {
    this.showModal = true;
    this.modalImageSrc = modalImageSrc;
    
    if (name === "anime") {
      this.currentTitle = "ANIME MANIA"
      this.currentMessage = "Site vitrine responsive pour un magasin de culture japonaise."
      this.currentLink = "link"
      this.currentTechnology = "Développé avec :HTML5/CSS3, JavaScript, Vue.js 3."
      this.currentLinkTitle = "ANIME MANIA"
      this.currentDate = "Date : Avril 2024"
      this.currentCategory = "Categorie: site virtine"
      this.current404 = "Erreur 404"
    }
    if (name === "sushi") {
      this.currentTitle = "SUSHI FACTORY";
      this.currentMessage = "Site vitrine responsive pour un restaurant japonais."
      this.currentLink = "link"
      this.currentTechnology = "Développé avec :HTML5/CSS3, JavaScript, Vue.js 3."
      this.currentLinkTitle = "SUSHI FACTORY"
      this.currentDate = "Date : Avril 2024"
      this.currentCategory = "Categorie: site virtine"
      this.current404 = "Erreur 404"
    }
    if (name === "jeuxVideo") {
      this.currentTitle = "GAMING ZONE"
      this.currentMessage = "Site vitrine responsive pour un magasin de jeux viéo."
      this.currentLink = "link"
      this.currentTechnology = "Développé avec :HTML5/CSS3, JavaScript, Vue.js 3."
      this.currentLinkTitle = "GAMING ZONE"
      this.currentDate = "Date : Avril 2024"
      this.currentCategory = "Categorie: site virtine"
      this.current404 = "Erreur 404"
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
      jeuxVideo: jeuxVideo,
      modalImageSrc: "",
      currentDate:"",
      currentCategory:"",
      current404:"",
      notFound: notFound,
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
    color: white;
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
img{
  width: 300px;
  height: 300px;
}

</style>