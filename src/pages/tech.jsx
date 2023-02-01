import { useState } from 'react'
import React from 'react'
import data from '../data/data'

function Tech() {
  const [index, setIndex] = useState(0)

  function handleClick(e){
    setIndex(e.target.value)
  }
  console.log(index)
  const techList = data[0].technology
 
  let tech = techList[index]
  const techImg = tech.images

  let lastIndexLand = techImg.landscape.lastIndexOf("/")
  let imageNameLand = techImg.landscape.slice(lastIndexLand+1)
  let techImageLandscape = new URL('../assets/technology/'+imageNameLand, import.meta.url).href

  let lastIndexPort = techImg.portrait.lastIndexOf("/")
  let imageNamePort= techImg.portrait.slice(lastIndexPort+1)
  let techImagePort = new URL('../assets/technology/'+imageNamePort, import.meta.url).href

  let navActive = 'border-white/100 bg-white border w-10 h-10 md:w-[60px] md:h-[60px] lg:w-20 lg:h-20 text-center flex justify-center items-center mx-2 rounded-full text-space-blue'
  let navInactive = 'border-white/25 border w-10 h-10 md:w-[60px] md:h-[60px] lg:w-20 lg:h-20 text-center flex justify-center items-center mx-2 rounded-full hover:border-white/100'


    return (
      <main className='bg-space-blue bg-tech-sm md:bg-tech-md lg:bg-tech-lg bg-cover h-screen w-screen absolute top-0 left-0 -z-10 text-white transition ease-in-out overflow-scroll '>

         {/* PAGE WRAPPER */} 
        <div className='mt-36'>

          <section className='
          relative
          flex 
          flex-col
          flex-wrap
          justify-center
          lg:flex-row 
          lg:items-center
          '>
          
        
            <h1 className='
            text-h5-sm
            md:text-h5-md
            lg:text-h5
            uppercase
            text-center
            tracking-head5
            md:pl-32
            my-4
            md:text-left
            lg:basis-full
            
            '>
              <span className="opacity-25">03 </span>Space Launch 101
            </h1>

            <div className='w-full lg:w-5/12 lg:order-3'>
              <picture className='w-full'>
                <source media="(min-width: 1024px)" srcSet={techImagePort} className='w-full'></source>
                <img src={techImageLandscape} alt={tech.name} className="w-full "/>
              </picture>
              
            </div>
          
            <nav className='mx-auto lg:w-1/12'>
                <ul className="cursor-pointer flex flex-row lg:flex-col justify-evenly gap-4 my-4 lg:items-center">
                  <li onClick={handleClick} value="0"
                    className={index === 0 ? navActive : navInactive}>1</li>
                  <li onClick={handleClick} value="1"
                    className={index === 1 ? navActive : navInactive}>2</li>
                  <li onClick={handleClick} value="2" 
                    className={index === 2 ? navActive : navInactive}>3</li>
                </ul>
            </nav>

            <section className='text-center lg:w-5/12 lg:text-left flex flex-col gap-5'>
              <h3 className='text-[14px] md:text-base text-light-lavender uppercase tracking-navText'>The Terminology...</h3>
              <h2 className='text-h3-sm md:text-h3-md lg:text-h3 uppercase font-bellefair'>{tech.name}</h2>
              <p className='text-light-lavender px-10 md:px-36 lg:pl-0 text-base font-barlow-r'>{tech.description}</p>
            </section>
              
          </section>
        </div>

        
        
      </main>
    )
  }
  
  export default Tech;