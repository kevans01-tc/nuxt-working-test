<template>
  <div
    :id="id"
    :class="['wl-filter-tag']"
    :value="value"
    :remove="remove">
    {{ value }}

    <WLButton
      v-if="remove"
      aria-label="Remove tag"
      variant="plain"
      secondary
      icon="close-outline"
      @click="onClick"></WLButton>
  </div>
</template>

<script setup>
  import {defineEmits} from 'vue';
  import WLButton from '../Buttons/WLButton.vue';

  const props = defineProps({
    variant: {
      type: String,
      default: 'badge',
      validator: (value) => {
        return ['badge', 'dot'].includes(value);
      },
    },
    remove: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
      required: true,
    },
  });

  const emit = defineEmits(['removeTag']);

  const onClick = () => {
    console.log('Removing tag with ID:', props.id);
    emit('removeTag', props.id);
  };
</script>

<style scoped>
  .wl-filter-tag {
    display: inline-flex;
    padding: var(--spacing-tiny) var(--spacing-xsmall);
    align-items: center;
    gap: var(--spacing-tiny);
    border-radius: 1.25rem;
    border: 1px solid var(--color-grey-6);
    background: var(--color-grey-2);
    color: var(--grey-grey-8, #707070);
    font-family: Inter;
    font-size: var(--font-size-small);
    font-style: normal;
    font-weight: var(--font-weight-semi-bold);
    line-height: 143%;
  }

  .wl-filter-tag:has(button) {
    padding-right: var(--spacing-xxsmall);
  }
</style>
