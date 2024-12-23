<script setup>
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
      <div v-for="item in pierwsza" :key="item.title" class="teams__card" @click="toggleCard(item)">
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
    <Footer />
</template>
<script>
export default {
    name: 'Home',
    data() {
      return {
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
    }
}}
</script>