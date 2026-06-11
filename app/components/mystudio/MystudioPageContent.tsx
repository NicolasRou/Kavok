'use client'

import { useState } from 'react'
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
