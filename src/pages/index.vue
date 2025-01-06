<script setup>
  import { ref, onMounted } from 'vue';
  const videos = ref([]);
  const twitterFeed = ref(null);
  const fetchLatestVideos = async () => {
  const channelId = 'UC5UrDmPQeRHo1Ts9ielirgQ';
  const apiKey = 'AIzaSyDQrAyINT1LHxfoBrIjSOmPJBSMWKRpkdQ';
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
  // const script = document.createElement('script');
  // script.src = 'https://platform.twitter.com/widgets.js';
  // script.async = true;
  // script.onload = () => {
  //   // Initialize the Twitter widget
  //   if (twitterFeed.value) {
  //     window.twttr.widgets.load(twitterFeed.value);
  //   }
  // };
  // document.body.appendChild(script);

  // // Add the Twitter embed code
  // twitterFeed.value.innerHTML = `
  //   <a class="twitter-timeline" data-chrome="noscrollbar noheader" data-theme="dark" data-height="400px" data-width="80vw"href="https://twitter.com/Venek__?ref_src=twsrc%5Etfw">Tweets by AlmostPro_LoL</a>
  // `;
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
    <Section anchor="About" title="O nas" subtitle="" grid="2">
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
    <!-- <iframe loading="lazy" width="100%" height="1000px" src="https://syndication.twitter.com/srv/timeline-profile/screen-name/Venek__?frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&origin=localhost&showHeader=true&showReplies=false&transparent=false&theme=light&width=550px" style="height: 100%;" frameborder="0" scrolling="no"></iframe> -->
    <!-- <div ref="twitterFeed"></div> -->
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
