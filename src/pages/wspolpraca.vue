<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import stanowiska from '/tabele/stanowiska.json';
const pageTitle = 'Współpraca';
  useHead({
    title: pageTitle,
  });
const config = {
    wrapAround: true,
    breakpointMode: 'carousel',
    autoplay: 4000,
    pauseAutoplayOnHover: true,
    transition:400
}
</script>
<template>
    <Navbar />
    <Section anchor="wspolpraca" title="Współpraca">
        <div class="wspolpraca__box">
            <p class="wspolpraca__box--item">
                Jako organizacja rozwijająca się w kierunku profesjonalnych lig i turniejów online, szukamy partnerów, którzy chcieliby wspierać naszą misję i dołączyć do rozwijania polskiej sceny League of Legends. Zależy nam na współpracy z markami, które są kojarzone z esportem, League of Legends czy sprzętem dla graczy. Poszukujemy sponsorów, którzy pomogą nam w finansowaniu kluczowych aspektów projektu, takich jak pula nagród, promocja wydarzeń, a także wynagrodzenia dla osób zaangażowanych w tworzenie tego przedsięwzięcia.
            </p>
            <p class="wspolpraca__box--item">
                Jesteśmy także otwarci na współpracę z innymi organizacjami, które tworzą ligi, turnieje czy inne aktywności związane z esportem. Naszym celem jest wspólne rozwijanie społeczności League of Legends w Polsce, dlatego zależy nam na obopólnej promocji i wsparciu w działaniach – zarówno poprzez wymianę zasobów, jak i współorganizowanie wydarzeń.
            </p>
            <p class="wspolpraca__box--item">
                Jeśli Twoja marka lub organizacja podziela naszą pasję do League of Legends i chce dołożyć swoją cegiełkę do rozwoju tej wspaniałej społeczności, zapraszamy do kontaktu. Razem możemy zrobić coś wyjątkowego!
            </p>
        </div>
    </Section>
    <Section anchor="stanowiska" title="Poszukujemy ludzi na stanowiska takie jak:">
        <Carousel v-bind="config">
            <Slide v-for="item in stanowiska" :key="item">
                <div class="carousel__slide--job">{{ item.job }}</div>
                <div class="carousel__slide--description">
                  <p>{{ item.description }}</p>
                  <!-- <NuxtImg :alt="`Logo drużyny ${item.team}`" :src="`/images/teams/BW.png`"/> -->
                </div>
            </Slide>
            <template #addons>
            <Navigation />
            <Pagination />
            </template>
        </Carousel>
    </Section>
    <Footer />
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        data: stanowiska
      }
    },
  }
</script>