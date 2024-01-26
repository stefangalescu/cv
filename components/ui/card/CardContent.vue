<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div :class="cn('text-pretty font-mono text-sm text-muted-foreground', props.class)">
    <slot />
  </div>
</template>
