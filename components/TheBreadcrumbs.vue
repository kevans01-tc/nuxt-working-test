<template>
  <nav
    class="wl-breadcrumb-nav"
    aria-label="Breadcrumb">
    <ol class="wl-breadcrumb-nav-list">
      <li
        v-for="(item, index) in breadcrumbItems"
        :key="index"
        class="wl-breadcrumb-item">
        <a
          v-if="index === breadcrumbItems.length - 1"
          class="wl-breadcrumb-current"
          aria-current="page"
          >{{ item.text }}</a
        >
        <router-link
          v-else
          :to="item.to"
          class="wl-breadcrumb-link"
          >{{ item.text }}</router-link
        >
        <WLIcon
          v-if="index !== breadcrumbItems.length - 1"
          aria-hidden="true"
          name="chevron-forward"
          >/</WLIcon
        >
      </li>
    </ol>
  </nav>
</template>

<script setup>
  import {computed} from 'vue';
  import {useRoute} from 'vue-router';
  import WLIcon from './WLIcon.vue';

  const route = useRoute();

  const transformSegment = (segment) => {
    // Replace hyphens with spaces
    return segment.replace(/-/g, ' ');
  };

  const breadcrumbItems = computed(() => {
    const routeSegments = route.path
      .split('/')
      .filter((segment) => segment !== '');
    return routeSegments.map((segment, index) => ({
      text: transformSegment(segment),
      to: `/${routeSegments.slice(0, index + 1).join('/')}`,
    }));
  });
</script>

<style scoped>
  .wl-breadcrumb-nav {
    text-transform: capitalize;
    font-size: var(--font-size-xsmall);
    font-weight: var(--font-weight-default);
    line-height: 133%;
    font-style: normal;
    margin-bottom: 1.5rem;
  }

  .wl-breadcrumb-nav .wl-breadcrumb-nav-list,
  .wl-breadcrumb-nav .wl-breadcrumb-item {
    display: inline-flex;
    margin: 0;
  }

  .wl-breadcrumb-nav .wl-breadcrumb-nav-list,
  .wl-breadcrumb-nav .wl-breadcrumb-item {
    align-items: center;
    padding: 0;
  }

  .wl-breadcrumb-nav .wl-breadcrumb-nav-list {
    flex-wrap: wrap;
    list-style: none;
  }

  .wl-breadcrumb-nav .wl-breadcrumb-item .wl-breadcrumb-link {
    text-decoration: none;
    color: var(--color-grey-8);
    padding: var(--spacing-tiny) 0;
    border-radius: 0.125rem;
  }

  .wl-breadcrumb-current {
    color: var(--color-grey-9);
    font-weight: var(--font-weight-semi-bold);
  }

  .wl-breadcrumb-nav .wl-icon {
    color: var(--color-grey-6);
    margin: 0 var(--spacing-tiny);
  }

  /* .wl-breadcrumb-item:not(:last-child) ::after {
    content: '\203A';
    color: var(--color-grey-6);
    font-size: 16px;
    width: 1rem;
    height: 1rem;
    margin: 0 0.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  } */

  /* hover and focus states */
  .wl-breadcrumb-nav .wl-breadcrumb-item .wl-breadcrumb-link:hover,
  .wl-breadcrumb-nav .wl-breadcrumb-item .wl-breadcrumb-link:focus-visible {
    color: var(--color-primary-8);
  }

  .wl-breadcrumb-nav .wl-breadcrumb-item .wl-breadcrumb-link:focus-visible {
    outline-offset: 2px;
    outline: 2px solid var(--color-primary-7);
    box-shadow: 0 0 0 2px var(--color-white);
  }
</style>
