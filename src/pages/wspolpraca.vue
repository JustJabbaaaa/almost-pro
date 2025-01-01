<script setup>
import hof from '/tabele/hof.json';
const pageTitle = 'Współpraca';
  useHead({
    title: pageTitle,
  });
</script>
<template>
    <Navbar />
    <Section anchor="wspolpraca" title="Współpraca">
    </Section>
    <Footer />
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        wspolpraca: [
            {
                job: 'Moderator',
                description: "Lubisz dbać o porządek - Twoim zadaniem będzie monitorowanie wiadomości na Discordzie, dbanie o przestrzeganie zasad i utrzymywanie pozytywnej atmosfery w naszej społeczności. Jesteś komunikatywny – będziesz odpowiedzialny za kontakt z graczami i uczestnikami, pomaganie im w razie potrzeby oraz proponowanie nowych pomysłów na rozwój serwera. Masz pomysły na rozwój społeczności – Twoim celem będzie aktywne proponowanie i wdrażanie nowych inicjatyw i wydarzeń na Discordzie, które wzbogacą nasze rozgrywki i integrację społeczności. Jesteś odpowiedzialny i konsekwentny – będziesz zarządzać kanałami, organizować rozmowy, a także reagować na ewentualne problemy, zapewniając, że każdy czuje się komfortowo i bezpiecznie w naszej społeczności. Masz czas i chęci do działania – szukamy osób, które mogą dopasować czas pracy do swoich możliwości. Zakres obowiązków będzie elastyczny, więc możesz dostosować go do swojego grafiku, a także do bieżących potrzeb naszej organizacji."
            },
            {
                job: "Grafik",
                description: "Masz pasję do tworzenia wizualnych projektów - Twoim zadaniem będzie tworzenie i edytowanie grafik oraz animacji do wykorzystania na Discordzie, w mediach społecznościowych i w transmisjach. Lubisz pracować z różnorodnymi formatami – będziesz odpowiedzialny za przygotowywanie grafik na terminarze, MVP, ogłoszenia czy inne materiały promujące nasze wydarzenia. Masz oko do detali – dbasz o spójność wizualną naszych materiałów i potrafisz dopasować styl do charakteru naszej organizacji i społeczności. Jesteś kreatywny – Twoje pomysły będą kluczowe do tworzenia unikalnych grafik, które przyciągną uwagę społeczności i uczestników, a także wzbogacą nasze wydarzenia. Masz elastyczny czas pracy – jako grafik możesz samodzielnie dopasować godziny pracy do swoich możliwości, dostosowując je do aktualnych potrzeb organizacji i projektów."
            },
            {
                job: "Montażysta",
                description: "Masz doświadczenie w montażu wideo – będziesz odpowiedzialny za montowanie filmów, klipów i highlightów z naszych rozgrywek, tworząc dynamiczne i angażujące materiały wideo. Jesteś kreatywny i masz dobry zmysł estetyczny – Twoje filmy muszą przyciągać uwagę, dlatego szukamy osoby, która potrafi stworzyć wideo, które wyróżni się na tle innych. Znasz przynajmniej jeden program do montażu wideo – ważne, abyś miał doświadczenie w pracy z dowolnym narzędziem do edycji materiałów wideo, np. Adobe Premiere, Sony Vegas, czy DaVinci Resolve. Znasz potrzeby społeczności – jeśli nie znasz jeszcze naszej społeczności, nie martw się, wszystko Ci wytłumaczymy i pokażemy, jak tworzyć treści, które będą odpowiadały oczekiwaniom graczy i widzów. Masz elastyczny czas pracy – podobnie jak w innych rolach, zakres obowiązków i czas pracy będzie dostosowany do Twoich możliwości, więc możesz pracować w dogodnych dla siebie godzinach."
            },
            {
                job: "Social Media",
                description: "Masz chęć do prowadzenia profili społecznościowych – doświadczenie w tej roli jest mile widziane, ale jeśli dopiero zaczynasz, to również zapraszamy do aplikowania. Będziesz odpowiedzialny za pisanie postów, zarządzanie kontami na platformach takich jak Twitter czy Instagram oraz interakcję z naszą społecznością. Masz głowę pełną pomysłów – szukamy osoby, która potrafi wymyślać ciekawe i angażujące treści, które przyciągną uwagę naszej społeczności i nowych obserwujących. Lubiłeś pisać posty i angażować innych – Twoje zadanie to nie tylko tworzenie treści, ale także dbanie o to, by nasza społeczność była na bieżąco informowana o wszystkim, co się dzieje w organizacji. Interesujesz się światem e-sportu i League of Legends – wiesz, co może przyciągnąć uwagę naszej społeczności, i rozumiesz, jak budować zaangażowanie wokół naszych projektów. Masz elastyczny czas pracy – podobnie jak w innych rolach, zakres obowiązków i czas pracy będzie dostosowany do Twoich możliwości, więc możesz pracować w dogodnych dla siebie godzinach."
            },
            {
                job: "Statystyk",
                description: "Masz umiejętność pracy z danymi – Twoim głównym zadaniem będzie uzupełnianie i analizowanie statystyk ligowych, takich jak ilość zabójstw, czas gier czy wyniki meczów w trakcie sezonów. Znasz obsługę arkuszy kalkulacyjnych – Excel lub Google Sheets to narzędzia, z którymi będziesz pracować, więc podstawowa znajomość tych programów to podstawa, ale jeśli będziesz potrzebować pomocy, wszystkiego Cię nauczymy! Interesujesz się statystykami w grach e-sportowych – Twoim zadaniem będzie zbieranie i wprowadzanie danych z meczów oraz ligowych rozgrywek, takich jak zabójstwa, czas gry czy inne interesujące statystyki. Potrafisz dbać o dokładność – w pracy z danymi precyzja jest kluczowa, dlatego zależy nam na osobie, która przywiązuje dużą wagę do szczegółów. Masz elastyczny czas pracy – podobnie jak w innych rolach, czas i zakres obowiązków będą dostosowane do Twoich możliwości, więc możesz pracować w dogodnych dla siebie godzinach."
            },
            {
                job: "Realizator transmisji",
                description: "Masz doświadczenie w obsłudze transmisji na żywo – znajomość programów takich jak OBS Studio, Streamlabs lub podobnych to duży plus. Jeśli nie masz jeszcze doświadczenia, chętnie Ci pomożemy! Znasz podstawy techniczne transmisji – zapewnianie stabilnego łącza internetowego, konfiguracja sprzętu oraz monitorowanie jakości transmisji to kluczowe elementy tego stanowiska. Masz umiejętności tworzenia i edytowania streamów – będziesz odpowiedzialny za wygląd transmisji, takie jak dodawanie HUD-ów, grafik, kamer czy przełączanie scen, aby transmisja była jak najbardziej profesjonalna. Lubiłeś pracować pod presją czasu – transmisje odbywają się na żywo, więc musisz być gotów do szybkiego reagowania na ewentualne problemy techniczne. Dostosowanie czasu pracy do własnych potrzeb – podobnie jak w innych rolach, godziny i zakres obowiązków zależą od dostępności i potrzeb organizacji, więc możesz pracować w dogodnych dla siebie momentach."
            }
        ]
      }
    },
  }
</script>