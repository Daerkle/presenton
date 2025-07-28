import React from 'react'
import Header from '@/app/dashboard/components/Header'
import { Metadata } from 'next'
import OutlinePage from './components/OutlinePage'
export const metadata: Metadata = {
  title: "Präsentationsgliederung",
  description: "Passen Sie Ihre Präsentationsgliederung an und organisieren Sie sie. Verschieben Sie Folien per Drag & Drop, fügen Sie Diagramme hinzu und generieren Sie Ihre Präsentation mit Leichtigkeit.",
  alternates: {
    canonical: "https://schwarm.ai/create"
  },
  keywords: [
    "Präsentationsgenerator",
    "KI Präsentationen",
    "Datenvisualisierung",
    "automatischer Präsentationsersteller",
    "professionelle Folien",
    "datengesteuerte Präsentationen",
    "Dokument zu Präsentation",
    "Präsentationsautomatisierung",
    "intelligentes Präsentationstool",
    "Geschäftspräsentationen"
  ]
}
const page = () => {
  return (
    <div className='relative min-h-screen'>
      <Header />
      <OutlinePage />
    </div>
  )
}

export default page
