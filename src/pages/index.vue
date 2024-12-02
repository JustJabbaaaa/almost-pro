<script setup>
  const pageTitle = 'Home';
  useHead({
    title: pageTitle,
  }); 
  function toggleCard(item) {
    item.flipped = !item.flipped
  }
</script>

<template>
  <div class="app home">
    <Navbar />
    <Header />
    <Section anchor="About" title="O nas" subtitle="Blablabla" grid="2">
      <div class="about__content">
        <h3>{{ about.title }}</h3>
        <p>{{ about.description }}</p>
      </div>
      <div class="about__image">
        <NuxtImg src="/images/about/about_image.webp" alt="Section Image" height="800" width="800" loading="lazy" />
      </div>
    </Section>
    <Section anchor="Services" title="Drużyny" class="chooseLeague">
            <div class="chooseLeague__buttons">
            <button :class="{'active': selectedDistrict === 'pierwsza'}" @click="selectDistrict('pierwsza');">
                I LIGA
            </button>
            <button :class="{'active': selectedDistrict === 'druga'}" to="#druga" @click="selectDistrict('druga');">
                II LIGA
            </button>
            </div>
    </Section>
   
    <Section anchor="Teams" grid="4" >
      <div v-if="selectedDistrict === 'pierwsza'" v-for="item in pierwsza" :key="item.title" class="teams__card" @click="toggleCard(item)">
        <div class="teams__card--front" :class="{ 'hidden': item.flipped }">        
          <div class="teams__card--icon">
            <NuxtImg :alt="`Logo drużyny ${item.team}`" :src="`/images/teams/${item.shortcut}.png`"/>
          </div>
          <div class="teams__card--name">
            <p>{{ item.team }}</p>
          </div>
        </div>

        <div class="teams__card--back" :class="{ 'hidden': !item.flipped }">
          <div class="teams__card--top">
            <NuxtImg :alt="`Logo drużyny ${item.team}`" :src="`/images/teams/${item.shortcut}.png`"/>
            <p>{{ item.team }}</p>
          </div>
          <p class="balance">W:{{ item.wins }} L:{{ item.loses}}</p>
          <div class="teams__card--bot">
            <div class="teams__card--lane">
              <NuxtImg :alt="`Ikona Toplane`" :src="`/images/linie/top.png`"></NuxtImg>
              <p>{{ item.top }}</p>
            </div>
            <div class="teams__card--lane">
              <NuxtImg :alt="`Ikona Toplane`" :src="`/images/linie/jungle.png`"></NuxtImg>
              <p>{{ item.jg }}</p>
            </div>
            <div class="teams__card--lane">
              <NuxtImg :alt="`Ikona Toplane`" :src="`/images/linie/mid.png`"></NuxtImg>
              <p>{{ item.mid }}</p>
            </div>
            <div class="teams__card--lane">
              <NuxtImg :alt="`Ikona Toplane`" :src="`/images/linie/adc.png`"></NuxtImg>
              <p>{{ item.adc }}</p>
            </div>
            <div class="teams__card--lane">
              <NuxtImg :alt="`Ikona Toplane`" :src="`/images/linie/support.png`"></NuxtImg>
              <p>{{ item.sup }}</p>
            </div>
          </div>
        </div>
        
      </div>
      <div v-if="selectedDistrict === 'druga'" v-for="item in druga" :key="item.title" class="teams__card" @click="toggleCard(item)">
        <div class="teams__card--front" :class="{ 'hidden': item.flipped }">        
          <div class="teams__card--icon">
            <NuxtImg :alt="`Logo drużyny ${item.team}`" :src="`/images/teams/${item.shortcut}.png`"/>
          </div>
          <div class="teams__card--name">
            <p>{{ item.team }}</p>
          </div>
        </div>

        <div class="teams__card--back" :class="{ 'hidden': !item.flipped }">
          <div class="teams__card--top">
            <NuxtImg :alt="`Logo drużyny ${item.team}`" :src="`/images/teams/${item.shortcut}.png`"/>
            <p>{{ item.team }}</p>
          </div>
          <p class="balance">W:{{ item.wins }} L:{{ item.loses}}</p>
          <div class="teams__card--bot">
            <div class="teams__card--lane">
              <NuxtImg :alt="`Ikona Toplane`" :src="`/images/linie/top.png`"></NuxtImg>
              <p>{{ item.top }}</p>
            </div>
            <div class="teams__card--lane">
              <NuxtImg :alt="`Ikona Toplane`" :src="`/images/linie/jungle.png`"></NuxtImg>
              <p>{{ item.jg }}</p>
            </div>
            <div class="teams__card--lane">
              <NuxtImg :alt="`Ikona Toplane`" :src="`/images/linie/mid.png`"></NuxtImg>
              <p>{{ item.mid }}</p>
            </div>
            <div class="teams__card--lane">
              <NuxtImg :alt="`Ikona Toplane`" :src="`/images/linie/adc.png`"></NuxtImg>
              <p>{{ item.adc }}</p>
            </div>
            <div class="teams__card--lane">
              <NuxtImg :alt="`Ikona Toplane`" :src="`/images/linie/support.png`"></NuxtImg>
              <p>{{ item.sup }}</p>
            </div>
          </div>
        </div>
        
      </div>
    </Section>
    <Section anchor="Contact" title="Contact" subtitle="Build amazing web sites." grid="1">
      <div class="contact__content">
        <div class="contact__content--title">
          <h3>{{ contact.title }}</h3>
        </div>
        <div class="contact__content--description">
          <p>{{ contact.description }}</p>
        </div>
        <div class="contact__content--buttons">
          <NuxtLink :to="`mailto:${contact.mail}`" class="btn btn-primary" target="_blank">{{ contact.btnMail }}</NuxtLink>
          <NuxtLink :to="`tel:${contact.phone}`" class="btn btn-secondary--outline" target="_blank">{{ contact.btnCall }}</NuxtLink>
        </div>
      </div>
    </Section>
    <Footer />
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        selectedDistrict: 'pierwsza',
      previousDistrict: null,
        about: {
          title: 'O nas',
          description: 'blabla',
        },
        pierwsza: [
        {
          team: 'BEIFENG ESPORTS',
          shortcut: 'BE',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'BLOODY WOUNDS',
          shortcut: 'BW',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Chaos Banes',
          shortcut: 'CB',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Chaos Harbringers',
          shortcut: 'CE',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Gejmingowi Emeryci',
          shortcut: 'GEJ',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'No.7',
          shortcut: 'N7',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Chaos Oni',
          shortcut: 'ONI',
          wins: 6,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Reve Esports',
          shortcut: 'REV',
          wins: 8,
          loses: 3,
          top: 'elobenc',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Tuesday Slots',
          captain: 'px3ke',
          captainDC: 'px3ke#1234',
          shortcut: 'TS',
          wins: 13,
          loses: 21,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: 'https://www.op.gg/summoners/euw/Adison-2137'
        },
      ],
      druga: [      
        {
          team: 'BLOODY WOUNDS',
          shortcut: 'BW',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },{
          team: 'BEIFENG ESPORTS',
          shortcut: 'BE',
          wins: 21,
          loses: 13,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Chaos Banes',
          shortcut: 'CB',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Chaos Harbringers',
          shortcut: 'CE',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Gejmingowi Emeryci',
          shortcut: 'GEJ',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'No.7',
          shortcut: 'N7',
          wins: 5,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Chaos Oni',
          shortcut: 'ONI',
          wins: 6,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Reve Esports',
          shortcut: 'REV',
          wins: 8,
          loses: 3,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
        {
          team: 'Tuesday Slots',
          captain: 'px3ke',
          captainDC: 'px3ke#1234',
          shortcut: 'TS',
          wins: 13,
          loses: 10,
          top: 'Grundi',
          jg: 'Lissek',
          mid: 'px3ke',
          adc: 'ek1pa',
          sup: 'dawid',
          opgg: ''
        },
      ],
      
        contact: {
          title: 'Get in touch with us to create lightning-fast websites.',
          description: 'Our team specializes in creating lightning-fast websites that deliver exceptional user experiences. We are dedicated to building web solutions optimized for speed and reliability. Contact us today to discuss how we can help you achieve your website performance goals.',
          mail: 'contact@kdproject.pl',
          phone: '+48 123 123 123',
          btnMail: 'Send Mail',
          btnCall: 'Call us',
        }
      }
    },
    methods: {
    toggleContent(item) {
      // Toggle the selected item between null and the clicked item
      this.selectedItem = this.selectedItem === item ? null : item;
    },
    selectDistrict(district) {
    this.selectedDistrict = district;
  },
  },
    
  }
</script>