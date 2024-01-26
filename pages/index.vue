<script setup lang="ts">
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-vue-next'
import { RESUME } from '@/data/resume'
</script>

<template>
  <main class="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
    <section class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">{{ RESUME.name }}</h1>
          <p class="max-w-md text-pretty font-mono text-sm text-muted-foreground">
            {{ RESUME.about }}
          </p>
          <p class="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            <a class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline" :href="RESUME.locationLink" target="_blank">
              <GlobeIcon class="size-3" />
              {{ RESUME.location }}
            </a>
          </p>
          <div class="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            <UiButton v-if="RESUME.contact.email" class="size-8" variant="outline" size="icon" as-child>
              <a :href="`mailto:${RESUME.contact.email}`">
                <MailIcon class="size-4" />
              </a>
            </UiButton>
            <UiButton v-if="RESUME.contact.tel" class="size-8" variant="outline" size="icon" as-child>
              <a :href="`tel:${RESUME.contact.tel}`">
                <PhoneIcon class="size-4" />
              </a>
            </UiButton>
            <UiButton v-for="social in RESUME.contact.social" :key="social.name" class="size-8" variant="outline" size="icon" as-child>
              <a :href="social.url">
                <component :is="social.icon" class="size-4" />
              </a>
            </UiButton>
          </div>
          <div class="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
            <a v-if="RESUME.contact.email" :href="`mailto:${RESUME.contact.email}`">
              <span class="underline">{{ RESUME.contact.email }}</span>
            </a>
            <a v-if="RESUME.contact.tel" :href="`tel:${RESUME.contact.tel}`">
              <span class="underline">{{ RESUME.contact.tel }}</span>
            </a>
          </div>
        </div>

        <UiAvatar class="size-28">
          <UiAvatarImage :alt="RESUME.name" :src="RESUME.avatarUrl" />
          <UiAvatarFallback>{{ RESUME.initials }}</UiAvatarFallback>
        </UiAvatar>
      </div>

      <UiSection>
        <h2 class="text-xl font-bold">About</h2>
        <p class="text-pretty font-mono text-sm text-muted-foreground">
          {{ RESUME.summary }}
        </p>
      </UiSection>

      <UiSection v-if="RESUME.work && Array.isArray(RESUME.work)">
        <h2 class="text-xl font-bold">Work Experience</h2>
        <UiCard v-for="work in RESUME.work" :key="work.company">
          <UiCardHeader>
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a class="hover:underline" :href="work.link">
                  {{ work.company }}
                </a>

                <span v-if="work.badges && Array.isArray(work.badges)" class="inline-flex gap-x-1">
                  <UiBadge v-for="badge in work.badges" :key="badge" variant="secondary" class="align-middle text-xs">{{ badge }}</UiBadge>
                </span>
              </h3>
              <div class="text-sm tabular-nums text-gray-500">{{ work.start }} - {{ work.end }}</div>
            </div>

            <h4 class="font-mono text-sm leading-none">
              {{ work.title }}
            </h4>
          </UiCardHeader>
          <UiCardContent class="mt-2 text-xs">
            {{ work.description }}
          </UiCardContent>
        </UiCard>
      </UiSection>

      <UiSection v-if="RESUME.education && Array.isArray(RESUME.education)">
        <h2 class="text-xl font-bold">Education</h2>
        <UiCard v-for="education in RESUME.education" :key="education.school">
          <UiCardHeader>
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="font-semibold leading-none">
                {{ education.school }}
              </h3>
              <div class="text-sm tabular-nums text-gray-500">{{ education.start }} - {{ education.end }}</div>
            </div>
          </UiCardHeader>
          <UiCardContent class="mt-2">{{ education.degree }}</UiCardContent>
        </UiCard>
      </UiSection>

      <UiSection v-if="RESUME.skills && Array.isArray(RESUME.skills)">
        <h2 class="text-xl font-bold">Skills</h2>
        <div class="flex flex-wrap gap-1">
          <UiBadge v-for="skill in RESUME.skills" :key="skill">{{ skill }}</UiBadge>
        </div>
      </UiSection>

      <UiSection v-if="RESUME.projects && Array.isArray(RESUME.projects)" class="print-force-new-page scroll-mb-16">
        <h2 class="text-xl font-bold">Projects</h2>
        <div class="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
          <ProjectCard
            v-for="project in RESUME.projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :tags="project.techStack"
            :link="'link' in project ? project.link.href : undefined"
          />
        </div>
      </UiSection>
    </section>
  </main>
</template>
