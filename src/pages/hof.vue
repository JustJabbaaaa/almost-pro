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
                    <h3>{{ season.nazwa }}</h3>
                </div>
                <div class="hof__content--winners" v-for="winner in season" grid="2">
                      <div class="hof__content--teamName">
                        <h3>{{ winner.team_name }}</h3>
                      </div>
                      <div class="hof__content--teamPlayers">
                        <div class="hof__content--Player" v-for="(value, key) in winner.linie">
                          <NuxtImg :alt="`Ikona ${key}`" :src="`/images/linie/${key}.png`"></NuxtImg>
                          <p>{{value}}</p>
                        </div>
                      </div>
                </div>
                <div class="hof__content--mentions" v-for="mention in season.mentions">
                  <h3>{{ mention.title }}: {{ mention.person }}</h3>
                </div>
                <div class="hof__content--tots" v-for="tots in season">
                  <h3>{{ tots.title }}</h3>
                  <p v-for="(player, key) in tots.gracze">
                    {{key}}: {{ player }}
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