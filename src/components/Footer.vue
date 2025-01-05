<template>
  <footer id="footer" class="footer">    
    <div class="footer__body">
      <div class="contact__content">
        <div class="contact__content--title">
          <h3>NASZE SOCIAL MEDIA</h3>
        </div>
        <div class="contact__content--buttons" >
          <div v-for="item in contact" :key="item.title">
            <NuxtLink :to="`${item.link}`" target="_blank">
              <Icon :name="`fa6-brands:${item.socialmedia}`" />
            </NuxtLink>
          </div>
        </div>
      </div>
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
            socialmedia:"instagram",
            link:"https://www.instagram.com/almostpro_lol/",
          },
          {
            socialmedia:"x-twitter",
            link:"https://x.com/AlmostPro_LoL",
          },
          {
            socialmedia:"twitch",
            link:"https://www.twitch.tv/almostpro_lol",
          },
          {
            socialmedia:"youtube",
            link:"https://www.youtube.com/channel/UC5UrDmPQeRHo1Ts9ielirgQ",
          },
          {
            socialmedia:"tiktok",
            link:"https://tiktok.com/@almostpro_lol",
          },
          {
            socialmedia:"facebook",
            link:"https://www.facebook.com/profile.php?id=61559854110269",
          },
          {
            socialmedia:"discord",
            link:"https://discord.com/invite/fP98YY9zH8",
          }
        ]
    }}
  }
</script>