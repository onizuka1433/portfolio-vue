<script setup>
import email from "@/assets/images/email.png"
import linkedin from "@/assets/images/linkedin.png"
import twitter from "@/assets/images/twitter.png"
</script>

<template>
<div class="section dark">
    <div class="boxed text-center">
        <h2>Contactez-moi</h2>
        <div class="flex space-between">

            <div class="w32 contact">
                <a href="/">
                <img :src="email" alt="Email">
                <h3>E-mail</h3>
                </a>
                </div>

            <div class="w32 contact">
                <a href="/">
                <img :src="linkedin" alt="Linkedin">
            <h3>Linkedin</h3>
                </a>
            </div>

            <div class="w32 contact">
            <a href="/">
                <img :src="twitter" alt="Twitter">
            <h3>Twitter</h3>
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
.dark{
    background:#000 ;
    color: #fff;
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
.space-between{
justify-content: space-between;
}
.w32{
    width: 32%;
}
.contact{
    border-radius: 15px;
    padding: 15px;
    box-sizing: border-box;
}

img{
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    filter: brightness(65%);
    transition: .4s ease;
    transition: transform 0.3s ease;
}

img:hover {
  filter: brightness(100%);
  transform: scale(1.1);
}


h3{
    color:#fff;
    text-decoration: underline;
    filter: brightness(65%);
    transition: .4s ease;
    
}

h3:hover {
  filter: brightness(100%);
}



</style>