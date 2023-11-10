<template>
  <button class="btn btn-primary" role="button" aria-label="button" @click.once="$emit('click')">
    <slot />
  </button>
</template>
