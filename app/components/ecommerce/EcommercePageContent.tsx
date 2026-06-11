'use client'

import { useState } from 'react'
import HeroSection from './HeroSection'
import ProblemSection from './ProblemSection'
import FeaturesSection from './FeaturesSection'
import AISection from './AISection'
import PricingSection from './PricingSection'
import DownloadSection from './DownloadSection'
import CtaSection from './CtaSection'
import ContactModal from './ContactModal'

export default function EcommercePageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <HeroSection onOpenModal={openModal} />
      <ProblemSection />
      <FeaturesSection />
      <AISection onOpenModal={openModal} />
      <PricingSection onOpenModal={openModal} />
      <DownloadSection onOpenModal={openModal} />
      <CtaSection onOpenModal={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
