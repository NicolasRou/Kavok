'use client'

import { useState, useEffect } from 'react'
import HeroSection from './HeroSection'
import ProblemSection from './ProblemSection'
import FeaturesSection from './FeaturesSection'
import PricingSection from './PricingSection'
import DownloadSection from './DownloadSection'
import CtaSection from './CtaSection'
import ContactModal from './ContactModal'

interface MystudioPageContentProps {
  fontFamily?: string
}

export default function MystudioPageContent({ fontFamily = 'serif' }: MystudioPageContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() { setIsModalOpen(true) }
  function closeModal() { setIsModalOpen(false) }

  // Re-scroll al hash después de que el contenido dinámico termina de cargar.
  // El browser hace el scroll inicial antes de que imágenes y animaciones
  // estén listas, dejando el destino en la posición incorrecta.
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = hash.slice(1)
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'instant' })
    }
    // Primer intento rápido, segundo después de que el layout se estabilice
    const t1 = setTimeout(scroll, 100)
    const t2 = setTimeout(scroll, 600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <main>
      <HeroSection onOpenModal={openModal} fontFamily={fontFamily} />
      <ProblemSection fontFamily={fontFamily} />
      <FeaturesSection fontFamily={fontFamily} />
      <PricingSection onOpenModal={openModal} fontFamily={fontFamily} />
      <DownloadSection fontFamily={fontFamily} />
      <CtaSection onOpenModal={openModal} fontFamily={fontFamily} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} fontFamily={fontFamily} />
    </main>
  )
}
