import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Danyal Khan Portfolio',
        short_name: 'Danyal.Portfolio',
        description: 'Portfolio of Danyal Khan, a Flutter Developer & UI/UX Designer',
        start_url: '/',
        display: 'standalone',
        background_color: '#020617',
        theme_color: '#3b82f6',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
