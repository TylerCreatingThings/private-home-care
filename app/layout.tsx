import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Private Home Care Services | Sigal Farkas, RN, BScN | Post-Surgical Nursing',
  description: 'Expert private nursing care for plastic surgery recovery with Sigal Farkas, RN, BScN. Professional, compassionate, and discreet in-home care in the Greater Toronto Area.',
  keywords: 'private nursing, home care, plastic surgery recovery, post-surgical care, private nurse, Toronto nursing, Sigal Farkas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

