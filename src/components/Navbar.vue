<script setup>
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
</script>
<template>
  <div id="Navbar">
    <nav class="nav">
      <div class="container">
        <NuxtLink to="/" class="nav__brand" aria-label="Go to homepage"><NuxtImg src="/images/logo/logo_almost.png" alt="Logo almost pro" height="50" width="60"/></NuxtLink>
        <button class="nav__toggler" type="button" aria-label="Toggle navigation" @click="active = !active">
          <div class="nav__toggler--btn" :class="{ 'active': active }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div class="nav__collapse" :class="{ 'show': active }">
          <div class="nav__menu">
            <ul class="nav__list">
              <li class="nav__item" v-for="item in navigation" :key="item.name">
                <NuxtLink :to="item.link" class="nav__link" @click="active = !active">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="nav__menu--right">
            <NuxtLink to="#footer" class="nav__link">Kontakt</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        active: false,
        navigation: [
          // {
          //   name: 'O nas',
          //   link: '/#About',
          // },
          {
            name: 'Liga I',
            link: 'liga1',
          },
          {
            name: 'Liga II',
            link: 'liga2',
          },
          {
            name: 'Ściana chwały',
            link: 'hof',
          },
          {
            name: 'Współpraca',
            link: 'wspolpraca',
          },
        ],
      }
    },
    mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          const navbar = document.getElementById("Navbar")
          const navclasses = navbar.classList
          if(document.documentElement.scrollTop > 50) {
            if (navclasses.contains("active") === false) {
              navclasses.toggle("active");
            }
          }
          else if
            (navclasses.contains("active") === true) 
            navclasses.toggle("active"); 
        })
      })
    },
  }
</script>