'use client'

import { useSiteping } from '@navanta/feedback-widget/react'
import { LocalStorageStore } from '@navanta/feedback-widget/adapter-localstorage'

export interface FeedbackWidgetProps {
  projectName?: string
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
}

export function FeedbackWidget({
  projectName = 'navanta-design-system',
  position = 'bottom-right',
}: FeedbackWidgetProps) {
  useSiteping({
    store: new LocalStorageStore(),
    projectName,
    position,
    forceShow: true,
  })
  return null
}
