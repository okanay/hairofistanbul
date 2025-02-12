import {
  BookOpen,
  Building,
  ChevronDown,
  Circle,
  createIcons,
  Heart,
  HelpCircle,
  Image,
  Images,
  Mail,
  PhoneCall,
  Stethoscope,
  Users,
} from 'lucide'

function SetLucideIcons() {
  createIcons({
    icons: {
      PhoneCall,
      Circle,
      Heart,
      Stethoscope,
      Building,
      Users,
      Image,
      Images,
      HelpCircle,
      Mail,
      BookOpen,
      ChevronDown,
    },
  })
}

document.addEventListener('DOMContentLoaded', () => {
  SetLucideIcons()
})

declare global {
  interface Window {
    SetLucideIcons: () => void
  }
}

window.SetLucideIcons = SetLucideIcons

export { createIcons, SetLucideIcons }
