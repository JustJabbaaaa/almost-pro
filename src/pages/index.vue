<script setup>
  import { ref, onMounted } from 'vue';
  const videos = ref([]);
  const fetchLatestVideos = async () => {
  const channelId = 'UC5UrDmPQeRHo1Ts9ielirgQ';
  const apiKey = '';
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet,id&maxResults=3`);
  const data = await response.json();
  videos.value = data.items.map(item => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url
  }));
};

onMounted(() => {
  fetchLatestVideos();
});
  const pageTitle = 'Home';
  useHead({
    title: pageTitle,
  }); 
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
    <Section anchor="videos" title="Najnowsze filmy" grid="3">
      <div class="videos__content" v-for="video in videos" :key="video.id">
          <a :href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank" class="videos__content--video">
            <img :src="video.thumbnail" :alt="video.title" />
            {{ video.title }}
          </a>
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
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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