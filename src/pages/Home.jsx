import React from 'react'
import { FeaturesBlocks, FeaturesZigzag, Footer, Header, HeroHome, Newsletter, PageIllustration, Testimonials } from '../partials'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <Header />

      {/* Page content */}
      <main className="grow">
        {/* Page ilustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none">
          <PageIllustration />
        </div>

        {/* page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesZigzag />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home