<template>
  <footer id="footer" class="footer">  
    <div class="footer__container">
      <div class="footer__container--logo">
        <NuxtImg src="/images/logo/png.png" alt="Logo almost pro"/>
        <p>Almost Pro</p><p>E-Sport League</p>
      </div>
      <div class="footer__container--links">
        <h4>Znajdź nas na:</h4>
        <ul>
          <li v-for="item in contact" :key="item"><NuxtLink :target="item.target" :to="item.link">{{ item.socialmedia }}</NuxtLink></li>
        </ul>
      </div>
      <div class="footer__container--contact">
        <h4>Kontakt:</h4>
        <p>Email: <a href="mailto:almostpropl@gmail.com">almostpropl@gmail.com</a></p>
      </div>
    </div>
    <div class="footer__body">
      Copyright © {{new Date().getFullYear()}} All rights reserved | AlmostPro_LoL 
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data(){
      return{
      contact: [
          {
            socialmedia:"Twitter",
            link:"https://x.com/AlmostPro_LoL",
            target:"_blank",
          },
          {
            socialmedia:"Youtube",
            link:"https://www.youtube.com/channel/UC5UrDmPQeRHo1Ts9ielirgQ",
            target:"_blank",
          },
          {
            socialmedia:"Tiktok",
            link:"https://tiktok.com/@almostpro_lol",
            target:"_blank",
          },
          {
            socialmedia:"Discord",
            link:"https://discord.com/invite/fP98YY9zH8",
            target:"_blank",
          },
          {
            socialmedia:"Polityka Prywatności",
            link:"pp",
          }
        ]
    }}
  }
</script>