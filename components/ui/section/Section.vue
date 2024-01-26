<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
  <section :class="cn('flex min-h-0 flex-col gap-y-3', $attrs.class ?? '')">
    <slot />
  </section>
</template>
