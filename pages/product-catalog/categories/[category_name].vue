<script setup>
  const route = useRoute();
</script>

<template>
  <NuxtLayout name="subsection">
    <section>
      <TheBHeader></TheBHeader>
    </section>
    <section>
      <div>category {{ route.params.category_name }}</div>
    </section>
  </NuxtLayout>
</template>
