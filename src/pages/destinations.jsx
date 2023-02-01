import React from 'react'
import { useState } from 'react'
import data from '../data/data'

function Destination() {

  const [index, setIndex] = useState(0)

  function handleClick(e){
    setIndex(e.target.value)
  }
  const destinationsList = data[0].destinations
 
  let destination = destinationsList[index]

  let lastIndex = destination.images.png.lastIndexOf("/")
  let imageName = destination.images.png.slice(lastIndex+1)
  let destinationImage = new URL('../assets/destination/'+imageName, import.meta.url).href

  let navActive ='border-b-3 pb-2 border-white text-white'
  let navInactive = 'border-b-3 pb-2 border-white/0 hover:border-white/50'

    return (
      <main className='bg-space-blue bg-dest-sm md:bg-dest-md lg:bg-dest-lg bg-cover h-screen w-screen absolute top-0 left-0 -z-10 text-white transition ease-in-out overflow-scroll'>

        {/* PAGE WRAPPER */} 
        <div className='mt-36'>

          <h1 className='
          text-h5-sm
          md:text-h5-md
          lg:text-h5
          text-center 
          md:text-left
          md:pl-32
          md:my-4
          uppercase 
          tracking-head5 
          '>
            <span className="opacity-25">01   </span> 
            Pick your destination
          </h1>

          <section className='flex flex-column flex-wrap justify-center content-center pt-4 mt-0 lg:flex-row lg:flex-nowrap lg:w-10/12 lg:mx-auto'>

              <div className='mx-auto my-10 lg:w-1/2
              block w-[45%] md:w-[300px]'>
                <img src={destinationImage} alt={destination.name} />
              </div>
              <div className='lg:w-1/2 lg:ml-10'>

                <nav className='w-1/2 md:w-1/3 mx-auto lg:mx-0 lg:w-2/3'>
                  <ul className="cursor-pointer flex flex-row justify-between text-center lg:text-left tracking-navText text-light-lavender
                  uppercase
                  ">
                      <li onClick={handleClick} value="0"
                        className={index === 0 ? navActive : navInactive}>Moon</li>
                      <li onClick={handleClick} value="1"
                        className={index === 1 ? navActive : navInactive}>Mars</li>
                      <li onClick={handleClick} value="2"
                        className={index === 2 ? navActive : navInactive}>Europa</li>
                      <li onClick={handleClick} value="3"
                        className={index === 3 ? navActive : navInactive}>Titan</li>
                  </ul>
                </nav>
              <div className='text-center'>
                <h2 className='

                  text-h2-sm
                  md:text-h2-md
                  lg:text-h2

                  text-center
                  lg:text-left
                  font-bellefair 
                  uppercase 
                  tracking 
                  my-5'>{destination.name}</h2>
                <p className='mx-10 text-center text-light-lavender lg:text-left lg:mx-1 text-bodytext font-barlow-r'>{destination.description}</p>

                  <div className="mx-auto lg:mx-1 my-5 h-px w-[327px] lg:w-[444px] bg-white/25"></div>

                  <div className='my-10 md:flex md:flex-row md:mx-auto md:flex-wrap md:w-1/2 md:justify-between lg:my-5 lg:w-full lg:text-left lg:pr-24'>

                    <div className='lg:w-1/2'>
                      <h3 className='text-light-lavender text-subh2 uppercase tracking-subhead2 my-2'>Avg. Distance</h3>
                      <p className='font-bellefair uppercase text-subh1 my-2'>{destination.distance}</p>
                    </div> 

                    <div className='lg:w-1/2'>
                      <h3 className='text-light-lavender text-subh2 uppercase tracking-subhead2 my-2'>Est. Travel Time</h3>
                      <p className='font-bellefair uppercase text-subh1 my-2'>{destination.travel}</p>
                    </div>
                  </div>
              </div>
            </div>
          </section>
        </div>


      
        
      </main>
    )
  }
  
  export default Destination;