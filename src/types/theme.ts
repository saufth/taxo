/** Application themes */
export type Theme = 'primary' | 'secondary'

/** Used for define a theme */
export interface Themeable {
  /** Theme prop */
  theme?: Theme
}
