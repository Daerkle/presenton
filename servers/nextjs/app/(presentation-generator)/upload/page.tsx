import React from 'react'

import UploadPage from './components/UploadPage'
import Header from '@/app/dashboard/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "SCHWARM | Open Source KI-Präsentationsgenerator",
    description: "Open-Source KI-Präsentationsgenerator mit anpassbaren Layouts, Multi-Modell-Unterstützung (OpenAI, Gemini, Ollama) und PDF/PPTX-Export. Eine kostenlose Gamma-Alternative.",
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
    ],
    openGraph: {
        title: "Datenpräsentation erstellen | SCHWARM",
        description: "Open-Source KI-Präsentationsgenerator mit anpassbaren Layouts, Multi-Modell-Unterstützung (OpenAI, Gemini, Ollama) und PDF/PPTX-Export. Eine kostenlose Gamma-Alternative.",
        type: "website",
        url: "https://schwarm.ai/create",
        siteName: "SCHWARM"
    },
    twitter: {
        card: "summary_large_image",
        title: "Datenpräsentation erstellen | SCHWARM",
        description: "Open-Source KI-Präsentationsgenerator mit anpassbaren Layouts, Multi-Modell-Unterstützung (OpenAI, Gemini, Ollama) und PDF/PPTX-Export. Eine kostenlose Gamma-Alternative.",
        site: "@schwarm_ai",
        creator: "@schwarm_ai"
    }
}

const page = () => {
    return (
        <div className='relative'>
            <Header />
            <div className='flex flex-col items-center justify-center  py-8'>
                <h1 className='text-3xl font-semibold font-instrument_sans'>Präsentation erstellen</h1>
                {/* <p className='text-sm text-gray-500'>We will generate a presentation for you</p> */}
            </div>

            <UploadPage />

        </div>)
}

export default page

