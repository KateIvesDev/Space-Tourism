import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/shared/logo.svg'
import { ReactComponent as Hamburger } from '../assets/shared/icon-hamburger.svg'
import { ReactComponent as Close } from '../assets/shared/icon-close.svg'

function Navigation() {

	const [isNavExpanded, setIsNavExpanded] = useState(false)

	let expanded = 'absolute top-0 right-0 w-2/3 md:flex md:relative md:w-2/3 md:h-[96px] lg:w-full'
	let notExpanded = 'md:flex md:relative md:w-2/3 md:h-[96px] hidden'

	let activeClassName ='md:hover:border-b-2 md:border-b-2'
	let inactiveClassName = 'md:border-b-2 border-white/0 md:hover:border-white/50'
  
	return (
    
		<header className='text-white'>

			{/* NAVWRAPPER */} 
			<nav className='
        w-screen
        md:pl-16
        md:mx-0
        relative
        md:flex
        md:justify-between
        lg:pt-10
        '>

				{/* LOGO BOX */} 
				<div className='p-6'>
					<Logo role='img'/>
				</div>

				{/* LINE BOX */} 
				<div className='
          bg-white/25
          none
          lg:h-px 
          lg:w-[437px]
          lg:inline-block
          lg:mt-12
          lg:relative
          lg:left-12
          lg:z-10
          '>
				</div>

				{/* HAMBURGER BOX */} 
				<button id='hamburger' onClick={()=>setIsNavExpanded(!isNavExpanded)} className='md:hidden absolute top-10 right-6 cursor-pointer' aria-label='Mobile Menu'>
					<Hamburger/>
				</button>
       
				{/* MENU BOX */}
				<div className={isNavExpanded ? expanded : notExpanded}>
					<ul className='
            pt-12
            pl-10
            backdrop-blur-xl 
            h-screen
            bg-white/[.04] 
            cursor-pointer 
            md:w-full
            text-left
            tracking-navText
            uppercase 
            md:p-0
            md:flex 
            md:h-[96px]
            md:justify-evenly
            md:items-center
          '>
						<li className='flex justify-end pr-6 md:hidden'>
							<Close id="close" onClick={()=>setIsNavExpanded(false)}  className=''/>
						</li>
						<NavLink 
							to='/' 
							onClick={()=>setIsNavExpanded(false)}
							className={({isActive}) => 
								isActive ? activeClassName : inactiveClassName}>
							<li className='py-8'>
								<span className='font-bold md:hidden lg:inline-block'>00 </span>  Home
							</li>
						</NavLink>
						<NavLink 
							to='/destinations' 
							onClick={()=>setIsNavExpanded(false)}
							className={({isActive}) => 
								isActive ? activeClassName : inactiveClassName}>
							<li className='py-8'>
								<span className='font-bold md:hidden lg:inline-block'>01 </span>  Destinations
							</li>
						</NavLink>
						<NavLink 
							to='/crew' 
							onClick={()=>setIsNavExpanded(false)}
							className={({isActive}) => 
								isActive ? activeClassName : inactiveClassName}>
							<li className='py-8'>
								<span className='font-bold md:hidden lg:inline-block'>02 </span>  Crew
							</li>
						</NavLink>
						<NavLink 
							to='/tech' 
							onClick={()=>setIsNavExpanded(false)}
							className={({isActive}) => 
								isActive ? activeClassName : inactiveClassName}>
							<li className='py-8'>
								<span className='font-bold md:hidden lg:inline-block'>03 </span>  Technology
							</li>
						</NavLink>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navigation