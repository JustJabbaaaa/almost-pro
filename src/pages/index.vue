<script setup>
  import { ref, onMounted } from 'vue';
  const videos = ref([]);
  const config = useRuntimeConfig()
  const fetchLatestVideos = async () => {
  const channelId = 'UC5UrDmPQeRHo1Ts9ielirgQ';
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${config.public.secret}&channelId=${channelId}&order=date&part=snippet,id&maxResults=3`);
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
  const pageTitle = 'Strona główna';
  useHead({
    title: pageTitle,
  }); 
</script>

<template>
  <div class="app home">
    <Navbar />
    <Header />
    <Section anchor="videos" title="Najnowsze filmy" grid="3">
      <div class="videos__content" v-for="video in videos" :key="video.id">
          <a :href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank" class="videos__content--video">
            <img :src="video.thumbnail" :alt="video.title" />
            {{ video.title }}
          </a>
      </div>
    </Section>
    <Section anchor="discord" class="discord">
      <div class="discord__content">
        <div class="discord__content--text">
          <h1>Dołącz do naszej społeczności na Discordzie!</h1>
          <p>
            Chcesz być częścią naszej społeczności Almost Pro? Dołącz do naszego serwera Discord i bądź na bieżąco z turniejami, ligami i innymi wydarzeniami. Spotkaj innych graczy i fanów e-sportu!
          </p>
          <a href="https://discord.gg/3XzZSauqeF" target="_blank" class="discord-button">
            Dołącz teraz
          </a>
        </div>
        <div class="discord__content--image">
          <img src="/images/logo/discord.png" alt="Discord Banner">
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
        about: {
          title: '',
          description: "Łączymy graczy i fanów League of Legends w miejscu pełnym emocji i rywalizacji. Organizujemy ligi i turnieje online, tworząc przestrzeń, gdzie możesz rozwijać swoje umiejętności, zdobywać doświadczenie i poznawać nowych ludzi. Jeśli kochasz wyzwania i dobrą atmosferę, Almost Pro jest dla Ciebie!",
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
