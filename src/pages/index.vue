<script setup>
  import { ref, onMounted } from 'vue';
  const videos = ref([]);
  const lastFetchTime = ref(null); // To store the last fetch time
  const config = useRuntimeConfig()
  const fetchLatestVideos = async () => {
    const channelId = 'UC5UrDmPQeRHo1Ts9ielirgQ';
    const storageKey = 'latestVideos';
    const storageTimestampKey = 'latestVideosTimestamp';
    const cacheDuration = 24 * 60 * 60 * 1000; // 24 godziny w milisekundach
    
    const storedVideos = localStorage.getItem(storageKey);
    const storedTimestamp = localStorage.getItem(storageTimestampKey);

    if (storedVideos && storedTimestamp) {
      const timeElapsed = Date.now() - parseInt(storedTimestamp, 10);
      if (timeElapsed < cacheDuration) {
        videos.value = JSON.parse(storedVideos);
        return;
      }
    }

    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${config.public.secret}&channelId=${channelId}&order=date&part=snippet,id&maxResults=3`);
      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }

      const data = await response.json();
      if (!data.items || !Array.isArray(data.items)) {
        throw new Error('Invalid API response: missing items array');
      }

      videos.value = data.items.map(item => ({
        id: item.id?.videoId || null,
        title: item.snippet?.title || 'Untitled',
        thumbnail: item.snippet?.thumbnails?.high?.url || ''
      }));

      localStorage.setItem(storageKey, JSON.stringify(videos.value));
      localStorage.setItem(storageTimestampKey, Date.now().toString());
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
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
