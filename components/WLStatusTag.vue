<template>
  <div
    :class="['wl-status-tag', tagVariants, tagStatus]"
    :value="value">
    {{ value }}
  </div>
</template>

<script setup>
  import {computed} from 'vue';

  const props = defineProps({
    variant: {
      type: String,
      default: 'badge',
      validator: (value) => {
        return ['badge', 'dot'].includes(value);
      },
    },
    status: {
      type: String,
      default: 'default',
      validator: (value) => {
        return [
          'default',
          'warning',
          'positive',
          'negative',
          'neutral',
        ].includes(value);
      },
    },
    value: {
      type: String,
      default: '',
    },
  });

  // Tag variants
  const tagVariants = computed(() => {
    const variant = {};

    if (props.variant === 'dot') {
      variant['tag-dot'] = true;
    } else {
      variant['tag-badge'] = true;
    }

    return variant;
  });

  // Tag status style
  const tagStatus = computed(() => {
    const status = {};

    switch (props.status) {
      case 'default':
        status['tag-default'] = true;
        break;
      case 'warning':
        status['tag-warning'] = true;
        break;
      case 'positive':
        status['tag-positive'] = true;
        break;
      case 'negative':
        status['tag-negative'] = true;
        break;
      case 'neutral':
        status['tag-neutral'] = true;
        break;
      default:
        break;
    }

    return status;
  });
</script>

<style scoped>
  .wl-status-tag {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    font-size: var(--spacing-xsmall);
    font-style: normal;
    font-weight: var(--font-weight-semi-bold);
    line-height: 133%;
  }

  /* badge tag */

  .wl-status-tag.tag-badge {
    border-radius: 0.125rem;
    padding: var(--spacing-tiny) var(--spacing-xxsmall);
  }

  .wl-status-tag.tag-badge.tag-default {
    color: var(--color-info-9);
    background: var(--color-info-5);
  }

  .wl-status-tag.tag-warning {
    color: var(--color-warning-9);
    background: var(--color-warning-5);
  }

  .wl-status-tag.tag-positive {
    color: var(--color-success-9);
    background: var(--color-success-5);
  }

  .wl-status-tag.tag-negative {
    color: var(--color-danger-9);
    background: var(--color-danger-5);
  }

  .wl-status-tag.tag-neutral {
    color: var(--color-grey-9);
    background: var(--color-grey-5);
  }

  /* dot tags */
  .wl-status-tag.tag-dot {
    gap: var(--spacing-xxsmall);
    background-color: var(--color-clear);
    color: var(--color-grey-10);
  }

  .wl-status-tag.tag-dot::before {
    content: '';
    width: var(--spacing-xxsmall);
    height: var(--spacing-xxsmall);
    border-radius: 50%;
  }

  .wl-status-tag.tag-dot.tag-default::before {
    background: var(--color-info-9);
  }

  .wl-status-tag.tag-dot.tag-warning::before {
    background: var(--color-warning-7);
  }

  .wl-status-tag.tag-dot.tag-positive::before {
    background: var(--color-success-7);
  }

  .wl-status-tag.tag-dot.tag-negative::before {
    background: var(--color-danger-7);
  }

  .wl-status-tag.tag-dot.tag-neutral::before {
    background: var(--color-grey-7);
  }
</style>
