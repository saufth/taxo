// Types
import { LinkProps } from '../../../types/navigation'

/** The main navigation configuration */
export const navigationConfig: LinkProps[] = [
  {
    children: 'Inicio',
    href: '/'
  },
  {
    children: 'Soluciones',
    href: '/#solutions'
  },
  {
    children: 'Estrategía',
    href: '/#strategy'
  },
  {
    children: 'Razón de ser',
    href: '/reason-why'
  }
]

/** The main call to action configuration */
export const callToActionConfig: LinkProps = {
  children: 'Contáctanos',
  href: '/contact'
}
