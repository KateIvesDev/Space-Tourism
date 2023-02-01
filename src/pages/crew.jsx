import { useState } from 'react'
import React from 'react'
import data from '../data/data'
import { NavLink } from 'react-router-dom'

function Crew() {
  const [index, setIndex] = useState(0)
  function handleClick(e){
    setIndex(e.target.value)
  }
 
  const crewList = data[0].crew
  let crew = crewList[index]

  let lastIndex = crew.images.png.lastIndexOf("/")
  let imageName = crew.images.png.slice(lastIndex+1)
  let crewImage = new URL('../assets/crew/'+imageName, import.meta.url).href

  let navActive = 'w-2.5 h-2.5 lg:w-[15px] lg:h-[15px] bg-white rounded-full'
  let navInactive = 'w-2.5 h-2.5 lg:w-[15px] lg:h-[15px] bg-white/60 rounded-full hover:bg-white'

  
    return (
      
      <main className='bg-space-blue bg-crew-sm md:bg-crew-md lg:bg-crew-lg bg-cover w-screen h-screen absolute top-0 left-0 -z-10 text-white transition ease-in-out overflow-scroll'>

        {/* PAGE WRAPPER */} 
        <div className='
          mt-36
        '>
        
          {/* CONTENT SECTION */} 
          <section className='
            flex 
            flex-col 
            space-y-10 
            lg:flex-row 
            lg:flex-wrap
            ' >

            {/* PAGE HEADER */} 
              <h1 className='
              text-h5-sm
              md:text-h5-md
              lg:text-h5
              uppercase
              text-center
              tracking-head5
              md:text-left
              lg:basis-full
             
              md:pl-32
              md:my-4
              '>
                <span className="opacity-25">02 </span>
                Meet your crew
              </h1>

            {/* CREW IMAGE BOX */} 
            <div className='
                
                mx-auto
                w-[90%]
                md:order-5 
                md:w-1/2
                lg:w-[568px]      
                '>
              <img src={crewImage} alt={crew.name} className='
                mx-auto 
                w-[55%]
                md:w-full
                lg:w-[70%]
                
              '/>
              {/* LINE BLOCK */}
              <div className="h-px w-[327px] bg-[#383B4B]"></div>
            </div>
           
            
            {/* TEXT SECTION BOX */} 
            <div className='
              flex
              flex-col
              space-y-4
              text-center
              w-[90%]
              mx-auto
              md:w-[55%]
              lg:basis-1/3
              lg:text-left
              lg:space-y-8
            '>
              {/* NAV SECTION */}
            <nav className='
            md:order-4 
            md:my-4 
            md:w-1/2 
            md:mx-auto
            lg:mx-0
            lg:my-10
            lg:w-full'>
            
              <ul className="
                w-1/4 
                mx-auto
                cursor-pointer 
                flex 
                justify-between
                lg:w-full
                lg:justify-start
                lg:gap-8
                ">
                  
                  <li onClick={handleClick} 
                  value="0"
                  className={index===0 ? navActive : navInactive}>
                  </li>
                  <li onClick={handleClick} value="1"
                    className={index===1 ? navActive : navInactive}>
                  </li>
                  <li onClick={handleClick} value="2"
                    className={index===2 ? navActive : navInactive}></li>
                  <li onClick={handleClick} value="3"
                    className={index===3 ? navActive : navInactive}></li>
              </ul>
            </nav>


              {/* HEADING 4 */} 
              <h3 className='
                md:text-h4 
                w-full 
                font-bellefair
                uppercase 
                text-white/50 
                mt-4'
              >{crew.role}
              </h3>

              {/* HEADING 3 */} 
              <h2 className='
                text-h3-sm 
                md:text-h3-md 
                lg:text-h3 
                w-full 
                font-bellefair 
                uppercase'>
                {crew.name}
              </h2>

              {/* BODY TEXT */}
              <p className='
                text-base 
                text-light-lavender 
                font-barlow-r
                lg:w-[444px]
                lg:text-bodytext'>
                {crew.bio}
              </p>
            </div>
          </section>
        </div>
      </main>
    )
  }

  export default Crew;