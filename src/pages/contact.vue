<script setup>
const pageTitle = 'Kontakt';
  useHead({
    title: pageTitle,
  });
</script>
<template>
    <Navbar/>
    <Section anchor="contact">
        <div class="contact__title">
            <h1>Skontaktuj się z nami</h1>
            <p>Masz pytania? Wypełnij formularz poniżej!</p>            
        </div>
        <div class="contact__form">
            <h2>Formularz kontaktowy</h2>
            <form action="https://formspree.io/f/xwppaoen" method="POST">
                <div class="contact__form--group">
                    <label for="name">Imie i nazwisko</label>
                    <input type="text" name="name" id="name" placeholder="Wpisz swoje imię i nazwisko" required>
                </div>
                <div class="contact__form--group">
                    <label for="email">E-mail:</label>
                    <input type="email" name="email" id="email" placeholder="Twój adres e-mail" required>
                </div>
                <div class="contact__form--group">
                    <label for="message">Wiadomość:</label>
                    <textarea type="message" name="message" id="message" placeholder="Napisz swoją wiadomość" required></textarea>
                </div>
                <button class="contact__form--submit" type="submit">Wyślij wiadomość</button>
            </form>
        </div>
    </Section>
    <Footer/>
</template>
