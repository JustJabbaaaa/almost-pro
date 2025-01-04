<script setup>
import hof from '/tabele/hof.json';
const pageTitle = 'Ściana chwały';
  useHead({
    title: pageTitle,
  });
  const accordionIndex = ref(null);

function toggleAccordion(index) {
  if (accordionIndex.value === index) {
    accordionIndex.value = null;
  } else {
    accordionIndex.value = index;
  }
}
</script>

<template>
    <Navbar />
        <Section anchor="hof" title="Ściana chwały">
            <div class="hof__content" >
              <div class="hof__content--season"  v-for="(season, index) in hof" :key="index">
                <div class="hof__content--title" @click="toggleAccordion(index)">
                  <h2>{{ season.nazwa }}</h2>
                  <span class="accordion-icon" :class="{ 'expanded': accordionIndex === index }">
                    <Icon name="mdi:chevron-down" />
                  </span>
                </div>
                <div class="hof__content--accordion" :class="{ 'expanded': accordionIndex === index }">
                  <h3>Zwycięzcami zostali</h3>
                  <div class="hof__content--winners"> 
                    <div class="hof__content--teamName">
                      <NuxtImg :alt="`Logo drużyny ${season.winner.team_name}`" :src="`/images/teams/${season.winner.sc}.png`"/>
                      <h3>{{ season.winner.team_name}}</h3>
                    </div>
                    <div class="hof__content--teamPlayers">
                      <div class="hof__content--Player" v-for="(player,key) in season.winner.linie">
                        <NuxtImg class="rola" :alt="`Ikona ${key}`" :src="`/images/linie/${key}.png`"></NuxtImg>
                        <p>{{ player }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="hof__content--mentions" v-if="season.mentions">
                    <h3>Specjalne wyróżnienia</h3>
                    <div class="hof__content--mentionsBox" v-for="mention in season.mentions">
                      <h4>{{ mention.title }}</h4>
                      <p>{{ mention.person }}</p>
                    </div>
                  </div>
                  <div class="hof__content--tots" v-if="season.tots && season.tots.gracze">
                    <h3>{{ season.tots.title }}</h3>
                    <div class="hof__content--totsPlayer" v-for="(player, key) in season.tots.gracze">
                      <NuxtImg class="rola" :alt="`Ikona ${key}`" :src="`/images/linie/${key}.png`"></NuxtImg> 
                      <p>{{ player }}</p>
                    </div>
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
        data: hof
      }
    }
}
</script>