import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { metadata } from './metadata'

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

import ClientLayout from '@/components/ClientLayout'

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans min-h-screen bg-[var(--bg)] text-[var(--text)] relative z-0`}
      >
        <ClientLayout>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Danyal Khan",
                "url": "https://your-portfolio.vercel.app",
                "jobTitle": "Full-Stack Mobile Engineer & UI/UX Designer",
                "sameAs": [
                  "https://github.com/Danyalkhan21555",
                  "https://www.linkedin.com/in/danyalkhan215"
                ],
                "description": "Flutter developer with strong UI/UX design skills building clean and user-friendly mobile app interfaces."
              })
            }}
          />
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}

