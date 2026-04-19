import {
  Star,
  Zap,
  LayoutGrid,
  Bot,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'All Reviews',
          url: '/',
          icon: Star,
        },
        {
          title: 'Urgent Action',
          url: '/urgent-action',
          icon: Zap,
        },
        {
          title: 'Portfolio Config',
          url: '/portfolio-config',
          icon: LayoutGrid,
        },
        {
          title: 'AI Policies',
          url: '/ai-policies',
          badge: '3',
          icon: Bot,
        },
      ],
    },
  ],
}
