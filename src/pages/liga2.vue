<script setup>
const pageTitle = 'Druga Liga';
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
      <div v-for="item in druga" :key="item.title" class="teams__card" @click="toggleCard(item)">
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
        druga: [      
        {
          team: 'BLOODY WOUNDS',
          shortcut: 'BW',
          wins: 5,
          loses: 3,
          linie: {
            top: 'Grundi',
            jg: 'Lissek',
            mid: 'px3ke',
            adc: 'ek1pa',
            sup: 'dawid',
          }
        },
        {
          team: 'BEIFENG ESPORTS',
          shortcut: 'BE',
          wins: 21,
          loses: 13,
          linie: {
            top: 'aha',
            jg: 'Lissek',
            mid: 'px3ke',
            adc: 'ek1pa',
            sup: 'dawid',
          }
        },
        {
          team: 'Chaos Banes',
          shortcut: 'CB',
          wins: 5,
          loses: 3,
          linie: {
            top: 'Grundi',
            jg: 'Lissek',
            mid: 'px3ke',
            adc: 'ek1pa',
            sup: 'dawid',
          }
        },
        {
          team: 'Chaos Harbringers',
          shortcut: 'CE',
          wins: 5,
          loses: 3,
          linie: {
            top: 'Grundi',
            jg: 'Lissek',
            mid: 'px3ke',
            adc: 'ek1pa',
            sup: 'dawid',
          }
        },
        {
          team: 'Gejmingowi Emeryci',
          shortcut: 'GEJ',
          wins: 5,
          loses: 3,
          linie: {
            top: 'Grundi',
            jg: 'Lissek',
            mid: 'px3ke',
            adc: 'ek1pa',
            sup: 'dawid',
          }
        },
        {
          team: 'No.7',
          shortcut: 'N7',
          wins: 5,
          loses: 3,
          linie: {
            top: 'Grundi',
            jg: 'Lissek',
            mid: 'px3ke',
            adc: 'ek1pa',
            sup: 'dawid',
          }
        },
        {
          team: 'Chaos Oni',
          shortcut: 'ONI',
          wins: 6,
          loses: 3,
          linie: {
            top: 'Grundi',
            jg: 'Lissek',
            mid: 'px3ke',
            adc: 'ek1pa',
            sup: 'dawid',
          }
        },
        {
          team: 'Reve Esports',
          shortcut: 'REV',
          wins: 8,
          loses: 3,
          linie: {
            top: 'Grundi',
            jg: 'Lissek',
            mid: 'px3ke',
            adc: 'ek1pa',
            sup: 'dawid',
          }
        },
        {
          team: 'Tuesday Slots',
          captain: 'px3ke',
          captainDC: 'px3ke#1234',
          shortcut: 'TS',
          wins: 13,
          loses: 10,
          linie: {
            top: 'Grundi',
            jg: 'Lissek',
            mid: 'px3ke',
            adc: 'ek1pa',
            sup: 'dawid',
          }
        },
      ],
    }
}}
</script>