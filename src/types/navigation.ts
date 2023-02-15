// Types
import { Actionable } from './input'

/** Link component props */
export interface LinkProps {
  /** Link text */
  children: string
  /** Reference to redirect */
  href: string
}

/** Menu component props */
export interface MenuProps extends Actionable {
  /** Menu status */
  isOpen: boolean
}
