<script setup>
const pageTitle = 'Ściana chwały';
  useHead({
    title: pageTitle,
  });
</script>

<template>
    <Navbar />
        <Section title="Ściana chwały">
            <div class="hof__content" >
              <div class="hof__content--season" v-for="season in seasons">
                <div class="hof__content--title">
                    <h2>{{ season.nazwa }}</h2>
                </div>
                <h3 class="\">Zwycięzcami zostali</h3>
                <div class="hof__content--winners"> 
                      <div class="hof__content--teamName">
                        <NuxtImg :alt="`Ikona ${season.winner.team_name}`" :src="`/images/teams/${season.winner.sc}.png`"></NuxtImg> {{ player }}  
                        <h3>{{ season.winner.team_name}}</h3>
                      </div>
                      <div class="hof__content--teamPlayers">
                        <div class="hof__content--Player" v-for="(player,key) in season.winner.linie">
                          <NuxtImg :alt="`Ikona ${key}`" :src="`/images/linie/${key}.png`"></NuxtImg>
                          <p>{{ player }}</p>
                        </div>
                      </div>
                </div>
                <div class="hof__content--mentions">
                  <h3>Specjalne wyróżnienia</h3>
                  <p v-for="mention in season.mentions">{{ mention.title }}: {{ mention.person }}</p>
                </div>
                <div class="hof__content--tots" v-for="tots in season">
                  <h3>{{ tots.title }}</h3>
                  <p v-for="(player, key) in tots.gracze">
                    <NuxtImg :alt="`Ikona ${key}`" :src="`/images/linie/${key}.png`"></NuxtImg> {{ player }}
                  </p>
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
        seasons: {
        firstSeason: {
            nazwa: "1 SEZON OKRĘGÓWKI",
            winner: {
              team_name: "HINOKAMI KAGURY",
              sc:"HK",
              linie: {
              top: "Severum",
              jg: "bladeofdarkness",
              mid: "niewiem",
              adc: "vademori",
              sup: "TheWap"
              },
            },
            mentions: {
              mention1: {
                title:"MVP Finału",
                person: "Vademori"
              },
              mention2: {
                title:"MVP rozgrywek",
                person: "TheWap"
              },
              mention3: {
                title:"MVP Przegranych",
                person: "Bołubał"
              },
              mention4: {
                title:"Ulubieniec Sponsora",
                person: "Datakos"
              }
            }
        },
        secondSeason:{
            nazwa: "2 SEZON OKRĘGÓWKI",
            winner: {
              team_name: "ZAPYTAJNIKI",
              sc:"ZP",
              linie: {
              top: "P1lput",
              jg: "Ceenar",
              mid: "Wyściguwka",
              adc: "Lamston",
              sup: "Szopek"
              },
            },
            mentions: {
              mention1: {
                title:"MVP rozgrywek (mvp per map)",
                person: "x?"
              },
              mention2: {
                title:"Najlepszy komentator",
                person: "Skonn"
              },
              mention3: {
                title:"Najlepszy pickem",
                person: "Adsawo"
              }
            },
            tots: {
              title: "Drużyna sezonu",
              gracze: {
                top: "Destro",
                jg: "x",
                mid: "x",
                adc: "Judi",
                sup: "Szopek"
              }
            }
        },
        thirdSeason:{
            nazwa: "3 SEZON OKRĘGÓWKI",
            winner: {
              team_name: "ONION TEAM",
              linie: {
                coach: "mikomiko",
                top: "Piort",
                jg: "Kaczy",
                mid: "Point",
                adc: "x",
                sup: "Disu"
              },
            },
            mentions: {
              mention1: {
                title:"Najlepszy komentator",
                person: "Skonn"
              },
              mention2: {
                title:"Najlepszy coach",
                person: "mikomiko"
              },
              mention3: {
                title:"MVP Swissa",
                person: "Destro"
              },
              mention4: {
                title:"MVP Playoffow",
                person: "x"
              }
            },
        },
        firstAlmost:{
            nazwa: "1 SEZON ALMOST PRO OKRĘGÓWKI",
            winner: {
              team_name: "ONION TEAM",
              linie: {
                coach: "mikomiko",
                top: "Piort",
                jg: "Kaczy",
                mid: "Point",
                adc: "x",
                sup: "Disu"
              },
            },
            mentions: {
              mention1: {
                title:"MVP Sezonu",
                person: "Bungal"
              },
            },
        },
        secondAlmost:{
            nazwa: "2 SEZON ALMOST PRO",
            winner: {
              team_name: "NO.7 ESPORTS",
              sc:"N7",
              linie: {
                top: "Dawidek",
                jg: "Chudy Bingus",
                mid: "Siódmy",
                adc: "Katril",
                sup: "Słoniu"
              },
            },
            mentions: {
              mention1: {
                title:"MVP Sezonu",
                person: "Katril"
              },
              mention2: {
                title:"MVP Caster",
                person: "Jaskier"
              },
            },
            tots: {
              title: "Drużyna sezonu",
              gracze: {
                top: "FILL 1",
                jg: "Lumino & Chudy Bingus",
                mid: "Oogway",
                adc: "Katril",
                sup: "Słoniu"
              }
            }
        }
      }
      }
    }
}
</script>