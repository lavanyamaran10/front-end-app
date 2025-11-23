import React from 'react'
import Header from './Header'
import Hero from './Hero'
import TrendingPlant from './TrendingPlant'
import TopSellingPlant from './TopSellingPlant'
import CustomerReview from './CustomerReview'
import O2Plants from './O2Plants'
import Footer from './Footer'

const Index = () => {
  return (
    <div className='w-full min-h-screen bg-[#1B2317] overflow-x-hidden'>
      {/* Common background for Header, Hero, and TrendingPlant */}
      <div className='bg-plant-background bg-cover bg-center bg-no-repeat overflow-x-hidden'>
        <Header />
        <div className='flex flex-col gap-16 justify-between pb-16 overflow-x-hidden' style={{ paddingTop: 'clamp(70px,calc((100vw/1728)*105),105px)' }}>
          <Hero />
          <TrendingPlant />
        </div>
      </div>
      <div>
        <TopSellingPlant />
        <CustomerReview />
        <O2Plants />
        <Footer />
      </div>
    </div>
  )
}

export default Index
