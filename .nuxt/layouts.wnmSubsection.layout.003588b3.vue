<template>
  <div>
    <WnmSubNavigation
      v-if="headerStore.subNavigation?.links.length > 0"
      class="app-sub-navigation"
      :navigation="headerStore.subNavigation"
      :role-description="'Submenu'"
    />

    <!-- ** IMPORTANT: Nested Nuxt Layouts have issues displaying slotted content during SSR rendering, while being doubled on subsequent client hydration pass causing double rendering. Rendering as `ClientOnly` until solution can be found ** -->
    <ClientOnly>
      <slot name="default" />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import {useWNMHeaderStore} from "#imports";

const headerStore = useWNMHeaderStore();

</script>

<style scoped>

</style>
