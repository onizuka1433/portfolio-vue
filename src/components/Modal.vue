<template>
    <div v-if="isVisible" class="modal-backdrop" @click.self="close">
      <div class="modal-content">
        <slot name="header">
          <!-- Contenu d'en-tête par défaut -->
          En-tête de la modale
        </slot>
        <slot>
          <!-- Contenu principal par défaut -->
          Corps de la modale
        </slot>
        <slot name="footer">
          <!-- Contenu du pied de page par défaut -->
          <button @click="close">Fermer</button>
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
  
  <style>
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
    background: white;
    padding: 20px;
    border-radius: 5px;
    cursor: auto;
  }
  </style>