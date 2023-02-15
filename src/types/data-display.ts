export type SVGIcon = 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'linkedin'

/** The icon component props */
export interface IconProps {
  /** Icon to display */
  icon: SVGIcon
}

/** Images used in showcase component */
export type ShowcaseImage = 'about-team'
| 'about-innovate'
| 'about-oportunity'
| 'about-assume'
| 'about-strategy'
| 'about-prevent'
| 'about-progress'

/** Showcase component props */
export interface ShowcaseProps {
  /** Heading of the showcase */
  heading: string
  /** Description of the showcase */
  descriptions: string[]
  /** Image to use on the showcase */
  image: ShowcaseImage
  /** Set a CallToAction button */
  action?: boolean
  /** Set a Link from the specific route */
  link?: string
  /** Invert the order of content */
  reverse?: boolean
}

/** The quote component props */
export interface QuoteProps {
  /** The phrase to display */
  phrase: string
  /** The author of the phrase */
  author: string
  /** A legend about the author */
  legend?: string
}
