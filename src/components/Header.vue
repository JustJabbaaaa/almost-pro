<template>
  <Section anchor="Header">
    <div class="header__content">
      <div class="header__description">
        <h1 class="header__description--title">Almost Pro</h1>
        <p class="header__description--text">Społeczność, w której rywalizacja staje się pasją</p>
      </div>
    </div> 
    <div class="featured">
      <div class="stream">
        <h2> - LIVE</h2>
        <div class="stream--image">
          <iframe src="https://player.twitch.tv/?channel=AlmostPro_LoL&parent=almostpro.pl" allowfullscreen></iframe>
        </div>
      </div>
      <div class="article">
        <h3>Oglądaj nas na żywo</h3>
        <p>
          Łączymy graczy i fanów League of Legends w miejscu pełnym emocji i rywalizacji. Organizujemy ligi i turnieje online, tworząc przestrzeń, gdzie możesz rozwijać swoje umiejętności, zdobywać doświadczenie i poznawać nowych ludzi. Jeśli kochasz wyzwania i dobrą atmosferę, Almost Pro jest dla Ciebie!
        </p>
      </div>
    </div>
  </Section>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>