<script setup>
  const route = useRoute();
</script>

<template>
  <NuxtLayout name="subsection">
    <section>
      <TheBHeader></TheBHeader>
    </section>
    <section>
      <div>offerings {{ route.params.offering_name }}</div>
    </section>
  </NuxtLayout>
</template>
