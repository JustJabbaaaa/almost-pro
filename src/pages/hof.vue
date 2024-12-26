<script setup>
const pageTitle = 'Ściana chwały';
  useHead({
    title: pageTitle,
  });
</script>

<template>
    <Navbar />
        <Section title="Ściana chwały">
            <UCollapsible class="flex flex-col gap-2 w-48">
    <UButton
      class="group"
      label="Open"
      color="neutral"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      :ui="{
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
      }"
      block
    />

    <template #content>
      <Placeholder class="h-48" />xd
    </template>
  </UCollapsible>
        </Section>
    <Footer />
</template>
<script>
export default {
    name: 'Home',
    data() {
      return {
        pierwszySezon: [
            
        ]
      }
    }
}
</script>