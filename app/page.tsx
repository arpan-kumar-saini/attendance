import React from 'react'
import Features from "../components/Features"
import HeroSection from '@/components/herosection'
import WorkFlow from '@/components/workflow'
import Testimonials from '@/components/testimonials'

function page() {
  return (
    <>
    <HeroSection/>
     <Features/>
     <WorkFlow/>
     <Testimonials/>
    </>
   
  )
}

export default page