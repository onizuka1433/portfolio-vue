<script setup>
import background from "@/assets/images/background.jpg"
</script>

<template>
    <div class="slider">
      <img :src="background" class="slider-background" />
        <div class="slider-content">
          <h1> Dina LIM
          <p>Développeur full-stack junior</p>
          </h1>
        </div>
    </div>
</template>

<script>


</script>

<style scoped>
.slider{
    width:100%;
    min-height:80vh;
    aspect-ratio:16/9;
    background:#000;
}

.slider-background{
    width:100%;
    height:100%;
    object-fit: cover;
    filter: brightness(50%);
}
.slider-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
</style>
