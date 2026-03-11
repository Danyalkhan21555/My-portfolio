import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { metadata } from './metadata'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme init script: runs before paint to prevent FOUC (Flash of Unstyled Content) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var r=document.documentElement;if(t==='light'){r.classList.add('light')}else{r.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`,
          }}
        />
        {/* Viewport meta for proper mobile rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#020617" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans min-h-screen bg-[var(--bg)] text-[var(--text)] relative z-0`}
      >
        <ClientLayout>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Danyal Khan',
                url: 'https://your-portfolio.vercel.app',
                jobTitle: 'Full-Stack Mobile Engineer & UI/UX Designer',
                sameAs: [
                  'https://github.com/Danyalkhan21555',
                  'https://www.linkedin.com/in/danyalkhan215',
                ],
                description:
                  'Flutter developer with strong UI/UX design skills building clean and user-friendly mobile app interfaces.',
              }),
            }}
          />
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
