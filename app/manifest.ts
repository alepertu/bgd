import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PYA DEVS - Desarrollo Web Uruguay',
    short_name: 'PYA DEVS',
    description: 'Desarrollo web y de aplicaciones en Uruguay',
    start_url: '/',
    display: 'standalone',
    background_color: '#EFF6FF',
    theme_color: '#1e293b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

