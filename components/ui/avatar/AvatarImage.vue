<script setup lang="ts">
import type { ImageModifiers } from '@nuxt/image'
import { AvatarImage, type AvatarImageProps } from 'radix-vue'

const props = defineProps<Omit<AvatarImageProps, 'as'> & Partial<ImageModifiers>>()

const img = useImage()
// eslint-disable-next-line unicorn/prevent-abbreviations
const src = computed(() => img(props.src, { fit: props.fit, width: props.width, height: props.height, format: props.format }))
const imgAttributes = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { format, ...rest } = props
  return { ...rest, src: src.value }
})
</script>

<template>
  <AvatarImage v-bind="imgAttributes" class="h-full w-full object-cover" />
</template>
