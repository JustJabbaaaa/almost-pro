<script setup>
import pierwsza_liga from '/tabele/pierwsza_liga.json';
const pageTitle = 'Pierwsza Liga';
  useHead({
    title: pageTitle,
  });
  function toggleCard(item) {
    item.flipped = !item.flipped
  }
</script>
<template>
    <Navbar />
    <Section anchor="Team" grid="4" >
      <div v-for="item in pierwsza_liga" :key="item.title" class="teams__card" @click="toggleCard(item)">
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
            <div v-for="(value, key) in item.linie" class="teams__card--lane">
              <NuxtImg :alt="`Ikona ${key}`" :src="`/images/linie/${key}.png`"></NuxtImg>
              <p>{{value}}</p>
            </div>
          </div>
        </div>
    </div>
    </Section>
    <Footer />
</template>
<script>
export default {
    name: 'Home',
    data() {
      return {
        data: pierwsza_liga
    }
}}
</script>