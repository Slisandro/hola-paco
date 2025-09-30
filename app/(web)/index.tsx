import CallToAction from '@/components/web/call-to-action'
import FAQSection from '@/components/web/faq'
import Footer from '@/components/web/footer'
import Header from '@/components/web/header'
import HeroSection from '@/components/web/hero-section'
import PromoSection from '@/components/web/promo-section'
import ServiceInfo from '@/components/web/service-info'
import StepCards from '@/components/web/step-card'
import Testimonials from '@/components/web/testimonials'
import { useSplashAnimation } from '@/hooks/useSplashAnimation'
import React from 'react'
import { Animated, ScrollView, View } from 'react-native'

const Index = () => {
  const { isReady } = useSplashAnimation();

  if (!isReady) {
    return (
      <Splash />
    );
  }

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

function Splash() {
  const { opacity } = useSplashAnimation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#50B4E8",
      }}
    >
      <Animated.Image
        source={require("@/assets/images/logo.png")}
        style={{
          opacity,
          width: 240,
          height: 230,
          resizeMode: "contain",
        }}
      />
    </View>
  );
}

export default Index