<template>
    <div v-if="isVisible" class="modal-backdrop" @click.self="close">
      <div class="modal-content">
        <slot name="header">

          En-tête de la modale
        </slot>
        <slot>

          Corps de la modale
        </slot>
        <slot name="footer">

          <button @click="close" class="close-button">Fermer</button>
        </slot>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'Modal',
    props: {
      isVisible: Boolean
    },
    emits: ['update:isVisible'],
    methods: {
      close() {
        this.$emit('update:isVisible', false);
      }
    }
  }
  </script>
  
  <style scoped>
  
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 15000;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 25px;
    cursor: auto;
    border: 10px solid black;
    padding: 20px;
    
  }
  
  .close-button {
    padding: 10px 20px;
    background-color: #007bff; 
    color: #fff; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
  }
  
  .close-button:hover {
    background-color: #0056b3; 
  }
  </style>
  