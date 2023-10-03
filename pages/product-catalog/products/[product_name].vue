<script setup>
  const route = useRoute();
</script>

<template>
  <NuxtLayout name="subsection">
    <section>
      <TheBHeader></TheBHeader>
    </section>
    <section>
      <div>products {{ route.params.product_name }}</div>
    </section>
  </NuxtLayout>
</template>
