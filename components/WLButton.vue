<template>
  <a
    v-if="hasHref"
    :href="props.href"
    :class="[
      buttonVariants,
      buttonSizes,
      buttonStyles,
      {'is-disabled': props.disabled},
    ]"
    :aria-label="ariaLabel"
    @click="handleClick">
    <div class="button-content">
      <slot></slot>
      <WLIcon
        v-if="icon || iconLeft || iconRight"
        :name="icon || iconLeft || iconRight"
        :class="iconStyles"></WLIcon>
    </div>
  </a>
  <button
    v-else
    :class="[buttonVariants, buttonSizes, buttonStyles]"
    :disabled="props.disabled"
    :aria-label="ariaLabel">
    <WLIcon
      v-if="loading"
      name="loader"
      class="is-loading"></WLIcon>
    <div class="button-content">
      <slot></slot>
      <WLIcon
        v-if="icon || iconLeft || iconRight"
        :name="icon || iconLeft || iconRight"
        :class="iconStyles"></WLIcon>
    </div>
  </button>
</template>

<script setup>
  import {computed} from 'vue';

  import WLIcon from './WLIcon.vue';

  // Props
  const props = defineProps({
    variant: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'solid', 'plain'].includes(value);
      },
    },
    size: {
      type: String,
      default: '',
      validator: (value) => {
        return value === '' || value === 'small';
      },
    },
    invert: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    iconLeft: {
      type: String,
      default: '',
    },
    iconRight: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  });

  const hasHref = computed(() => Boolean(props.href));

  const handleClick = (event) => {
    if (props.disabled) {
      event.preventDefault();
    }
    console.log('clicked');
  };

  // Button variants
  const buttonVariants = computed(() => {
    const variant = {};

    if (props.variant === 'default') {
      variant['button-default'] = true;
    }

    if (props.variant === 'solid') {
      variant['button-solid'] = true;
    }

    if (props.variant === 'plain') {
      variant['button-plain'] = true;
    }

    return variant;
  });

  // Button sizes
  const buttonSizes = computed(() => {
    const size = {};

    if (props.size === 'small') {
      size['is-small'] = true;
    }

    return size;
  });

  // Button styles
  const buttonStyles = computed(() => {
    const style = {};

    if (props.invert) {
      style['is-invert'] = true;
    }

    if (props.secondary) {
      style['is-secondary'] = true;
    }

    if (props.danger) {
      style['is-danger'] = true;
    }

    if (props.disabled) {
      style['is-disabled'] = true;
    }

    if (props.block) {
      style['is-block'] = true;
    }

    return style;
  });

  // Icon styles
  const iconStyles = computed(() => {
    const style = {};

    if (props.icon) {
      style['has-icon-only'] = true;
    }

    if (props.iconLeft) {
      style['has-icon-left'] = true;
    }

    if (props.iconRight) {
      style['has-icon-right'] = true;
    }

    return style;
  });

  // Aria label
  const ariaLabel = computed(() => {
    return props.disabled ? 'Button is disabled' : undefined;
  });
</script>

<style scoped>
  /* button setup */
  .button-default,
  .button-solid,
  .button-plain {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-semi-bold);
    line-height: 100%;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    width: max-content;
  }

  .button-default,
  .button-solid {
    height: var(--spacing-large);
    padding: 0.8125rem 1.25rem;
    border-radius: 0.25rem;
  }

  .button-plain {
    height: var(--spacing-small);
    border-radius: 0.00625rem;
    border: none;
    padding: 0.3125rem 0rem;
  }

  /* additional touch space for all buttons */
  .button-default::after,
  .button-solid::after,
  .button-plain::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    min-width: var(--spacing-large);
    min-height: var(--spacing-large);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  /* loading state */
  button:has(.is-loading) .button-content {
    opacity: 0;
  }

  .is-loading {
    position: absolute;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    to {
      transform: rotate(360deg);
    }
  }

  /* button size changes */
  .button-default.is-small,
  .button-solid.is-small {
    height: var(--spacing-medium);
    padding: 0 var(--spacing-default);
  }

  .button-plain.is-small {
    height: var(--spacing-default);
  }
  .button-default.is-small,
  .button-solid.is-small,
  .button-plain.is-small {
    font-size: var(--font-size-xsmall);
  }

  /* font color */
  .button-default,
  .button-plain {
    color: var(--color-primary-8);
  }

  .button-plain.is-invert,
  .button-default.is-invert {
    color: var(--color-white-80);
  }

  .button-solid,
  .button-solid.is-secondary {
    color: var(--color-white);
  }

  .button-solid.is-invert {
    color: var(--color-primary-9);
  }

  .button-default.is-secondary,
  .button-plain.is-secondary {
    color: var(--color-grey-8);
  }
  /* background color */
  .button-default,
  .button-plain {
    background-color: var(--color-clear);
  }

  .button-solid {
    background-color: var(--color-primary-8);
  }

  .button-solid.is-secondary {
    background-color: var(--color-grey-8);
  }
  .button-solid.is-invert {
    background-color: var(--color-white-90);
  }
  /* border color */

  .button-default,
  .button-solid {
    border: 1px solid var(--color-primary-8);
  }

  .button-default.is-secondary {
    border: 1px solid var(--color-grey-8);
  }

  .button-default.is-invert {
    border: 1px solid var(--color-white-80);
  }

  .button-solid.is-secondary {
    border-color: var(--color-grey-8);
  }

  .button-solid.is-invert {
    border: 1px solid var(--color-clear);
  }

  /* hover and focus states */

  /* font color */
  .button-default:hover,
  .button-plain:hover {
    color: var(--color-primary-9);
  }

  .button-default.is-secondary:hover,
  .button-plain.is-secondary:hover {
    color: var(--color-grey-9);
  }

  .button-default.is-invert:hover,
  .button-plain.is-invert:hover {
    color: var(--color-white);
  }

  /* background color */

  .button-default:hover {
    background-color: var(--color-primary-2);
  }

  .button-default.is-secondary:hover {
    background-color: var(--color-grey-2);
  }

  .button-solid.is-secondary:hover {
    background-color: var(--color-grey-9);
  }

  .button-default.is-invert:hover {
    background-color: var(--color-black-10);
  }

  .button-solid:hover {
    background-color: var(--color-primary-9);
  }

  .button-solid.is-invert:hover {
    background-color: var(--color-white);
  }

  /* border color */

  .button-default:hover,
  .button-default:focus-visible,
  .button-solid:hover {
    border-color: var(--color-primary-9);
  }

  .button-default.is-secondary:hover,
  .button-default.is-secondary:focus-visible,
  .button-solid.is-secondary:hover {
    border-color: var(--color-grey-9);
  }

  .button-solid.is-secondary.is-disabled:hover {
    border: none;
  }

  .button-default.is-invert:hover,
  .button-solid.is-invert:hover {
    border-color: var(--color-white);
  }

  /* focus-visible outline */

  .button-default:focus-visible,
  .button-solid:focus-visible,
  .button-plain:focus-visible {
    outline-offset: 2px;
    outline: 2px solid var(--color-primary-7);
    box-shadow: 0 0 0 2px var(--color-white);
  }

  .button-default:focus-visible {
    border-color: var(--color-primary-9);
  }

  .button-default.is-invert:focus-visible {
    box-shadow: 0 0 0 2px var(--color-white);
    border: 1px solid var(--color-white-80);
  }

  /* danger zone */

  /* font color */
  .button-default.is-danger,
  .button-default.is-secondary.is-danger,
  .button-plain.is-danger,
  .button-plain.is-secondary.is-danger {
    color: var(--color-danger-8);
  }

  .button-default.is-invert.is-danger,
  .button-plain.is-invert.is-danger {
    color: var(--color-danger-6);
  }

  .button-solid.is-invert.is-danger {
    color: var(--color-danger-9);
  }

  /* background color */
  .button-solid.is-danger,
  .button-solid.is-secondary.is-danger {
    background-color: var(--color-danger-8);
  }

  .button-solid.is-invert.is-danger {
    background-color: var(--color-danger-6);
  }

  /* border color */
  .button-default.is-danger,
  .button-default.is-secondary.is-danger {
    border-color: var(--color-danger-8);
  }

  .button-default.is-invert.is-danger,
  .button-solid.is-invert.is-danger {
    border-color: var(--color-danger-6);
  }

  .button-solid.is-danger {
    border-color: var(--color-danger-8);
  }

  /* hover states */

  /* font color */
  .button-default.is-danger:hover,
  .button-default.is-secondary.is-danger:hover,
  .button-plain.is-danger:hover,
  .button-plain.is-secondary.is-danger:hover {
    color: var(--color-danger-9);
  }

  .button-default.is-invert.is-danger:hover,
  .button-plain.is-invert.is-danger:hover {
    color: var(--color-danger-4);
  }

  /* background color */
  .button-default.is-danger:hover,
  .button-default.is-secondary.is-danger:hover {
    background-color: var(--color-danger-2);
  }

  .button-solid.is-danger:hover,
  .button-solid.is-secondary.is-danger:hover,
  .button-default.is-invert.is-danger:hover {
    background-color: var(--color-danger-9);
  }

  .button-solid.is-invert.is-danger:hover {
    background-color: var(--color-danger-5);
  }

  /* border color */
  .button-default.is-danger:hover,
  .button-default.is-secondary.is-danger:hover,
  .button-solid.is-danger:hover {
    border-color: var(--color-danger-9);
  }

  .button-default.is-invert.is-danger:hover {
    border-color: var(--color-danger-4);
  }

  .button-solid.is-invert.is-danger:hover {
    border-color: var(--color-clear);
  }

  /* disabled */

  .is-disabled {
    cursor: not-allowed;
  }

  /* .is-disabled:focus-visible {
    outline: none;
  } */

  /* font color */
  .button-default.is-disabled,
  .button-default.is-secondary.is-disabled,
  .button-plain.is-disabled,
  .button-plain.is-secondary.is-disabled {
    color: var(--color-grey-6);
  }

  .button-default.is-invert.is-disabled,
  .button-plain.is-invert.is-disabled {
    color: var(--color-white-20);
  }

  .button-solid.is-invert.is-disabled {
    color: var(--color-black-20);
  }

  /* background color */

  .button-default.is-disabled,
  .button-default.is-secondary.is-disabled,
  .button-default.is-invert.is-disabled {
    background-color: var(--color-clear);
  }

  .button-solid.is-disabled,
  .button-solid.is-secondary.is-disabled {
    background-color: var(--color-grey-5);
  }

  .button-solid.is-invert.is-disabled {
    background-color: var(--color-white-20);
  }

  /* border color */

  .button-default.is-disabled,
  .button-default.is-secondary.is-disabled {
    border-color: var(--color-grey-6);
  }

  .button-default.is-invert.is-disabled {
    border-color: var(--color-white-20);
  }

  .button-solid.is-disabled {
    border-color: var(--color-grey-5);
  }

  .button-solid.is-invert.is-disabled {
    border-color: var(--color-clear);
  }

  /* inner button setup */
  .button-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-xxsmall);
  }

  /* with icon styles */

  .button-default:has(.has-icon-only),
  .button-solid:has(.has-icon-only) {
    padding: 0 var(--spacing-xsmall);
  }
  .button-default.is-small:has(.has-icon-only),
  .button-solid.is-small:has(.has-icon-only) {
    padding: 0 var(--spacing-xxsmall);
  }

  .button-content:has(.has-icon-left) {
    flex-direction: row-reverse;
  }
  .button-default:has(.has-icon-left),
  .button-solid:has(.has-icon-left) {
    padding-left: var(--spacing-default);
  }
  .button-default.is-small:has(.has-icon-left),
  .button-solid.is-small:has(.has-icon-left) {
    padding-left: var(--spacing-xsmall);
  }
  .button-default:has(.has-icon-right),
  .button-solid:has(.has-icon-right) {
    padding-right: var(--spacing-default);
  }
  .button-default.is-small:has(.has-icon-right),
  .button-solid.is-small:has(.has-icon-right) {
    padding-right: var(--spacing-xsmall);
  }

  .wl-icon {
    line-height: 0;
  }

  .svg {
    width: 100%;
  }
  /* full width button at smaller screens */
  @media screen and (max-width: 767px) {
    .is-block {
      width: 100%;
    }
  }
</style>
