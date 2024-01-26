<script setup lang="ts">
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

interface Props {
  title: string
  description: string
  tags: readonly string[]
  link?: string
}

defineProps<Props>()
</script>

<template>
  <Card class="flex flex-col overflow-hidden border border-muted p-3">
    <CardHeader>
      <div class="space-y-1">
        <CardTitle class="text-base">
          <a v-if="link" :href="link" target="_blank" class="inline-flex items-center gap-1 hover:underline">
            {{ title }}{{ ' ' }}
            <span class="size-1 rounded-full bg-green-500"></span>
          </a>
          <template v-else>{{ title }}</template>
        </CardTitle>
        <div class="hidden font-mono text-xs underline print:visible">
          {{ link?.replace('https://', '').replace('www.', '').replace('/', '') }}
        </div>
        <CardDescription class="font-mono text-xs">
          {{ description }}
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent class="mt-auto flex">
      <div class="mt-2 flex flex-wrap gap-1">
        <Badge v-for="tag in tags" :key="tag" class="px-1 py-0 text-[10px]" variant="secondary">
          {{ tag }}
        </Badge>
      </div>
    </CardContent>
  </Card>
</template>
