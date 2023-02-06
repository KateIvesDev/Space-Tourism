import { React } from 'react'
import { Link } from 'react-router-dom'

function Button() {
  
	return (
		<div className='relative group'>
			<Link to='/destinations'>
				<button className='
                    bg-white 
                    rounded-full
                    text-space-blue 
                    font-bellefair 
                    text-home-btn 
                    w-48 
                    h-48
                    m-8
                    uppercase
                    '>Explore
				</button>
				<div className='
                absolute
                top-0
                w-64
                h-64
                rounded-full
                bg-white/0
                group-hover:bg-white/10
                -z-10
                '></div>
			</Link>
		</div>
	)
}

export default Button