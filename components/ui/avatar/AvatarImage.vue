<script setup lang="ts">
import { AvatarImage, type AvatarImageProps } from 'radix-vue'

const props = defineProps<Omit<AvatarImageProps, 'as'>>()

const img = useImage()
// eslint-disable-next-line unicorn/prevent-abbreviations
const src = computed(() => img(props.src))
</script>

<template>
  <AvatarImage v-bind="{ ...props, src }" class="h-full w-full object-cover" />
</template>
