<template>
  <div class="app-container">
    <header>
      <WnmHeaderMain />
    </header>

    <main>
      <div class="main-content">
        <slot />
      </div>
    </main>

    <footer>
      <slot name="footer" />
    </footer>
    <slot name="notifications" />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
