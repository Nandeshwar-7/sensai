export const revalidate = 0;
import { industries } from '@/data/industries'
import React from 'react'
import Onboardingform from './_components/onboarding-form'

const OnBoardingPage = () => {
  //check if user is already onboarded
  return (
    <main>
      <Onboardingform  industries = {industries}/>
    </main>
  )
}

export default OnBoardingPage
