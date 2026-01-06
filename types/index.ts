export interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  image?: string
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

export interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string; size?: number }>
  level: number
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string; size?: number }>
  label: string
  value: string
  href: string
}

export interface NavItem {
  name: string
  href: string
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string; size?: number }>
  href: string
  label: string
}





