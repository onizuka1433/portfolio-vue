<template>
    <form @submit.prevent="submitForm">
      <label for="firstName">Prénom:</label>
      <input type="text" id="firstName" v-model="firstName" required><br>
  
      <label for="lastName">Nom:</label>
      <input type="text" id="lastName" v-model="lastName" required><br>
  
      <label for="subject">Objet:</label>
      <input type="text" id="subject" v-model="subject" required><br>
  
      <label for="message">Message:</label><br>
      <textarea id="message" v-model="message" rows="4" cols="50" required></textarea><br>
  
      <button type="submit">Envoyer</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        subject: '',
        message: ''
      };
    },
    methods: {
      submitForm() {
        // Ajoutez ici la logique pour envoyer le formulaire
      }
    }
  };
  </script>
  
  <style scoped>


form {
  max-width: 400px;
  margin: 5px auto;
  border: 5px solid #007bff;
  padding: 20px;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 5px;
  margin: 10px;
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
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}

  </style>
  