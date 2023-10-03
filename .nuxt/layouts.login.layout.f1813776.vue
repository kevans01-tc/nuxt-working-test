<script setup lang="ts">
import {useRoute} from "#app";
import {onMounted, ref} from "vue";

const route = useRoute()
const splash = ref(null)

onMounted(() => {
  if (route.meta.splashBGColor && splash.value) splash.value.style.backgroundColor = route.meta.splashBGColor;
  if (route.meta.splashBGImage && splash.value) splash.value.style.backgroundImage = route.meta.splashBGImage;
})


</script>

<template>
  <main
    class="login-layout"
  >
    <div
      ref="splash"
      class="login-layout-splash"
    />
    <div class="login-layout-content">
      <slot />
    </div>
  </main>
</template>

<style scoped>

</style>
