import CallToAction from '@/components/web/call-to-action'
import FAQSection from '@/components/web/faq'
import Footer from '@/components/web/footer'
import Header from '@/components/web/header'
import HeroSection from '@/components/web/hero-section'
import PromoSection from '@/components/web/promo-section'
import ServiceInfo from '@/components/web/service-info'
import StepCards from '@/components/web/step-card'
import Testimonials from '@/components/web/testimonials'
import React from 'react'
import { ScrollView } from 'react-native'

const Index = () => {
  return (
    <ScrollView>
      <Header />
      <HeroSection />
      <ServiceInfo />
      <Testimonials />
      <StepCards />
      <PromoSection />
      <FAQSection />
      <CallToAction />
      <Footer />
    </ScrollView>
  )
}

export default Index