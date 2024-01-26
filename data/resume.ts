import { GithubIcon, LinkedinIcon, XIcon } from 'lucide-vue-next'
import PentestToolsLogo from '@/components/logos/PentestTools.vue'

export const RESUME = {
  name: 'Stefan Galescu',
  initials: 'SG',
  location: 'Bucharest, Romania, GMT+2',
  locationLink: 'https://www.google.com/maps/place/Bucharest',
  about: 'Full Stack Product Engineer & Technical Lead @ Pentest-Tools.com, focused on enriching the product and developer experience.',
  summary:
    "Designer turned developer with a passion for translating beautifully crafted designs into interactive and accessible web experiences. Right now I'm working on several projects using Nuxt.js/Vue.js, Tailwind CSS and various headless CMS options. Keeping an open mind and learning as much as I can.",
  avatarUrl: 'https://avatars.githubusercontent.com/u/52995748?v=4',
  personalWebsiteUrl: 'https://stefangalescu.com',
  contact: {
    email: 'stefan.galescu@hey.com',
    tel: '+40727255452',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/stefangalescu',
        icon: GithubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/stefan-galescu/',
        icon: LinkedinIcon,
      },
      {
        name: 'X',
        url: 'https://x.com/StefanGalescu',
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: 'Bucharest University of Economic Studies',
      degree: 'Master of Public Administration',
      start: '2018',
      end: '2020',
    },
    {
      school: 'Bucharest University of Economic Studies',
      degree: "Bachelor's Degree in Public Administration",
      start: '2014',
      end: '2018',
    },
  ],
  work: [
    {
      company: 'Pentest-Tools.com',
      link: 'https://pentest-tools.com',
      title: 'Fullstack Product Engineer',
      logo: PentestToolsLogo,
      start: '2022',
      end: 'Present',
      description:
        'Implemented new features, took part in shaping the product experience, helped and pair programmed with team members, advocated for the work of the team members and for developer experience, created cross-team collaboration to address business goals. Led the migration to the Vue.js and Laravel frameworks, accelerating feature delivery and improving developer experience. Technologies: TypeScript, Vue.js, PHP, Laravel, MySQL, Tailwind CSS.',
    },
    {
      company: 'Pentest-Tools.com',
      link: 'https://pentest-tools.com',
      title: 'Technical Lead',
      logo: PentestToolsLogo,
      start: '2022',
      end: 'Present',
      description:
        'Played an instrumental role in fostering cross-team collaborations, steering larger refactors, and championing internal workshops. I managed to boost team productivity while reducing technical debt with active involvement in architecture development and decision-making processes.',
    },
    {
      company: 'Pentest-Tools.com',
      link: 'https://pentest-tools.com',
      title: 'Frontend Developer',
      logo: PentestToolsLogo,
      start: '2020',
      end: '2022',
      description:
        'Responsible with rebuilding the company’s public website, migrating it from a PHP monolith to a frontend framework driven website, focusing on efficient architecture, code writing, testing, and documentation. Techonologies used: TypeScript, Vue.js, Nuxt.js, Tailwind CSS.',
    },
  ],
  skills: ['JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'Node.js', 'PHP', 'Laravel', 'Statamic', 'MySQL'],
  projects: [
    {
      title: 'Pentest-Tools.com',
      techStack: ['Vue', 'PHP', 'Laravel', 'MySQL'],
      description:
        'Penetration testing tools that make it easy for security teams to discover, exploit and report common vulnerabilities while saving time for custom work and more creative hacking.',
      link: {
        label: 'pentest-tools.com',
        href: 'https://pentest-tools.com',
      },
    },
    {
      title: 'Statamic Heroicons',
      techStack: ['Side Project', 'PHP', 'Laravel', 'Statamic'],
      description: 'A Statamic addon that provides an Antlers component for Heroicons.',
      link: {
        label: 'statamic.com',
        href: 'https://statamic.com/addons/stefan-galescu/heroicons',
      },
    },
  ],
} as const
