<template>
    <div class="back-button">
      <div class="image-container">
        <img :src="notFound" alt="Erreur 404">
        <p><h1>Erreur 404 - Not Found</h1></p>
      </div>
      <a href="/">Retour à l'accueil</a>
    </div>
    <Footer />
  </template>
  
  <script>
  import Footer from '@/components/Footer.vue';
  import notFound from "@/assets/images/notFound.jpg";
  
  export default {
    components: {
      Footer
    },
    data() {
      return {
        notFound: notFound
      };
    }
  };
  </script>
  
  <style scoped>

.image-container p {
    color: white;
    background-color: #1c2546;
    font-size: 50px;
    margin-top: 10px;
    position: fixed;
    top: 5.4rem;
    right: 42rem; 
    z-index: 9999;
}


  .back-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    

  }
  
  .image-container {
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    
  }
  
  .image-container img {
    max-width: 80%;
    max-height: 80%;
    position:fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
  
  .back-button a {
    text-decoration: none;
    color: #fff;
    background-color: #000000;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    position: fixed;
    bottom: 150px;
    right: 850px; 
    z-index: 9999;
  }
  
  .back-button a:hover {
    background-color: #0056b3;
  }
  </style>
  