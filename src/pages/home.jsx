import { useState } from 'react'
import Button from '../components/button'

function Home() {

  return (
    <main className='bg-space-blue bg-home-sm md:bg-home-md lg:bg-home-lg bg-cover w-screen h-screen absolute top-0 -z-10 text-white transition ease-in-out overflow-scroll'>
      <section className='
        relative
        flex 
        flex-wrap
        flex-column  
        justify-center 
        content-center
        overscroll-contain
        pt-[25%]
        md:pt-20 
        md:mt-36
        lg:flex-row
        lg:flex-nowrap
        lg:pt-64
        lg:px-14
        lg:justify-between
        '>
          <div className='text-center lg:text-left lg:max-w-[475px]'>
            <h1 className='text-base md:text-h5 uppercase tracking-head5 text-light-lavender'>So, you want to travel to</h1>
            <span className='uppercase text-h1-sm md:text-h1-md lg:text-h1 block font-bellefair mx-auto'>Space</span>
            <p className='text-base md:text-bodytext text-light-lavender font-barlow-r px-8 py-5 lg:px-0'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <Button />
      </section>
    </main>
  
  )
}

export default Home;