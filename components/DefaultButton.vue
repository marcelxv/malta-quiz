<template>
  <button
    class="btn btn-primary"
    role="button"
    aria-label="button"
    @click.once="$emit('click')"
    @keydown.once="$emit('click')"
    @touchstart.once="$emit('click')"
    @touchend.once="$emit('click')"
  >
    <slot />
  </button>
</template>
