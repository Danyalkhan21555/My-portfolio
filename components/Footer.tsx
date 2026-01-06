import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { siteConfig } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, href: siteConfig.links.github, label: 'GitHub' },
    { icon: FiLinkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${siteConfig.links.email}`, label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

