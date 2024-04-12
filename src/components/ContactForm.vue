<script setup>
  import Footer from '@/components/Footer.vue';

</script>

<template>
    <div class="form-container">
      <form @submit.prevent="submitForm" action="mailto:votreadresseemail@example.com" method="POST">

          <label for="email">Votre e-mail:</label>
          <input type="email" id="email" v-model="email" placeholder="exemple@domaine.com" required><br>

          <label for="firstName">Prénom:</label>
          <input type="text" id="firstName" v-model="firstName" placeholder="Martin" required><br>

          <label for="lastName">Nom:</label>
          <input type="text" id="lastName" v-model="lastName" placeholder="DUPOND" required><br>

          <label for="subject">Objet:</label>
          <input type="text" id="subject" v-model="subject" placeholder="Titre du message" required><br>

          <label for="message">Message:</label><br>
          <textarea id="message" v-model="message" rows="4" cols="50"placeholder="Votre message" required></textarea><br>

          <button type="submit">Envoyer</button>
      </form>

      <div class="back-button">
        <a href="/" target="blank">Retour à l'accueil</a>
      </div>

    </div>
    <Footer />

</template>

  
  <script>


  export default {
    data() {
      return {
        email: '',
        firstName: '',
        lastName: '',
        subject: '',
        message: ''
      };
    },

    methods: {
      submitForm() {
        window.close();
      }
    },
  };
  </script>
  
  <style scoped>
.form-container {
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

form {
  background-color: #fff;
  max-width: 400px;
  margin: 5px auto;
  border: 5px solid #000000;
  padding: 20px;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 100px;
}

button[type="submit"] {
  background-color: #000000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.back-button :hover{
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}
.back-button a{
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  background-color: #000000;
  margin: 50px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
  </style>
  