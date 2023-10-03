<template>
  <span class="wl-icon">
    <svg
      v-if="name"
      :class="`wl-icon-${name}`"
      role="img"
      aria-hidden="true"
      focusable="false"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <template v-if="Array.isArray(iconPath)">
        <path
          v-for="(pathData, index) in iconPath"
          :key="index"
          :d="pathData" />
      </template>
      <template v-else>
        <path :d="iconPath" />
      </template>
    </svg>
  </span>
</template>

<script>
  import {icons} from './icons.js';

  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
    },
    computed: {
      iconPath() {
        // Map the icon name to its respective SVG path data
        return icons[this.name] || '';
      },
    },
  };
</script>

<style scoped>
  .wl-icon {
    display: flex;
    align-items: center;
  }
</style>
