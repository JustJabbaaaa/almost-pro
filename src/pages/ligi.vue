<script setup>
import liga1 from '/tabele/liga1.json';
import liga2 from '/tabele/liga2.json';
const pageTitle = 'Ligi';
  useHead({
    title: pageTitle,
  });
  const data1 = reactive(liga1.map(item => ({
  ...item,
  flipped: false,
  imageSrc: `/images/teams/liga1/${item.shortcut}.png`,
})));

const data2 = reactive(liga2.map(item => ({
  ...item,
  flipped: false,
  imageSrc: `/images/teams/liga2/${item.shortcut}.png`,
})));

function toggleCard(item) {
  item.flipped = !item.flipped; // Toggle the flipped state
}

function handleImageError(item) {
  item.imageSrc = 'https://placehold.co/400x400?text=Team+Placeholder';
}

</script>
<template>
    <Navbar />
    
      <Section class="glowny">
        <div class="liga">
          <div class="liga__przyciski">
            <button :class="{ 'active': activeSection === 'Pierwsza' }" @click="toggleSection('Pierwsza')" >Pierwsza Liga</button>
            <button :class="{ 'active': activeSection === 'Druga' }" @click="toggleSection('Druga')">Druga Liga</button>
          </div>
          <Section anchor="Pierwsza" class="liga__content" :class="{ 'active': activeSection === 'Pierwsza', 'hidden': activeSection !== 'Pierwsza' }">
            <div class="liga__content--info">
              <h2>Drużyny</h2>
              <div class="teams">
                <div v-for="item in data1" :key="item.title" class="teams__card" @click="toggleCard(item)">
                  <div class="teams__card--front" :class="{ 'hidden': item.flipped }">        
                    <NuxtImg
                      :alt="`Logo drużyny ${item.team}`"
                      :src="item.imageSrc"
                      @error="handleImageError(item)"
                    />
                    <h3>{{ item.team }}</h3>
                  </div>
                  <div class="teams__card--back" :class="{ 'hidden': !item.flipped }">
                    <div class="teams__card--top">
                      <NuxtImg
                        :alt="`Logo drużyny ${item.team}`"
                        :src="item.imageSrc"
                        @error="handleImageError(item)"
                      />
                      <h3>{{ item.team }}</h3>
                    </div>
                    <div class="teams__card--players">
                      <div v-for="(value, key) in item.linie" class="teams__card--lane">
                        <NuxtImg :alt="`Ikona ${key}`" :src="`/images/linie/${key}.png`"></NuxtImg>
                        <h3>{{value}}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="liga__content--groupstage">
              <h2>Faza Grupowa</h2>
              <p>
                W fazie grupowej drugiej ligi drużyny rywalizują w systemie "double round robin". <br>
                Po zakończeniu fazy grupowej trzy najlepsze drużyny z każdej grupy przechodzą do play-offów, które decydują o mistrzostwie.      
              </p>
              <img src="/images/grupy/grupy.png" alt="Schemat fazy grupowej 2. ligi">
            </div>
          </Section>
          <Section anchor="Druga" class="liga__content" :class="{ 'active': activeSection === 'Druga', 'hidden': activeSection !== 'Druga' }">
            <div class="liga__content--info">
              <h2>Drużyny</h2>
              <div class="teams">
                <div v-for="item in data2" :key="item.title" class="teams__card" @click="toggleCard(item)">
                  <div class="teams__card--front" :class="{ 'hidden': item.flipped }">        
                    <NuxtImg
                      :alt="`Logo drużyny ${item.team}`"
                      :src="item.imageSrc"
                      @error="handleImageError(item)"
                    />
                    <h3>{{ item.team }}</h3>
                  </div>
                  <div class="teams__card--back" :class="{ 'hidden': !item.flipped }">
                    <div class="teams__card--top">
                      <NuxtImg
                        :alt="`Logo drużyny ${item.team}`"
                        :src="item.imageSrc"
                        @error="handleImageError(item)"
                      />
                      <h3>{{ item.team }}</h3>
                    </div>
                    <div class="teams__card--players">
                      <div v-for="(value, key) in item.linie" class="teams__card--lane">
                        <NuxtImg :alt="`Ikona ${key}`" :src="`/images/linie/${key}.png`"></NuxtImg>
                        <h3>{{value}}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="liga__content--groupstage">
              <h2>Faza Grupowa</h2>
              <p>
                W fazie grupowej pierwszej ligi drużyny rywalizują w systemie "double round robin". <br>
                Po zakończeniu fazy grupowej trzy najlepsze drużyny z każdej grupy przechodzą do play-offów, które decydują o mistrzostwie.      
              </p>
              <img src="/images/grupy/grupy2.png" alt="Schemat fazy grupowej 1. ligi">
            </div>
          </Section>
        </div>
      </Section>
    <Footer />
</template>
<script>
export default {
    name: 'Home',
    data() {
      return {
        data: liga2,liga1,
        activeSection: 'Pierwsza'
    }
  },
  methods: {
    toggleSection(section) {
      this.activeSection = section;
    },
  }
}
</script>