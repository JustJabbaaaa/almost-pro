<template>
  <Section anchor="Header" grid="2">
    <div class="header__content">
      <div class="header__description">
        <h1 class="header__description--title">almost pro</h1>
        <p class="header__description--text">Społeczność, w której rywalizacja staje się pasją</p>
      </div>
      <div class="header__buttons">
        <NuxtLink to="#About" class="btn btn-primary">Czytaj dalej</NuxtLink>
      </div>
    </div> 
    <div class="stream">
      <iframe src="https://player.twitch.tv/?channel=almostpro_lol&parent=localhost"></iframe>
    </div>
  </Section>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>