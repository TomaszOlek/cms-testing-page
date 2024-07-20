import type { GtmEvent } from 'lib/gtm'

declare global {
  interface Window {
    dataLayer: GtmEvent[]
  }
}

export {}
