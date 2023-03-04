import React from 'react'

import FirstImg from '../assets/FirstProject.png'
import SecondImg from '../assets/SecondProject.png'
import ThirdImg from '../assets/ThirdProject.png'
import FourthImg from '../assets/FourthProject.png'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>

      <p className='text-center py-8 font-bold'>My portfolio features a variety of projects that showcase my skills and expertise in web development. Each project is built using modern web technologies  including HTML, CSS, JavaScript frameworks such as React and Nextjs.</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
        <ProjectItem img={FirstImg} title='Tax Calculator'   desc='I created a tax calculator using React, which allows users to easily calculate their tax for the year.' link='https://6403ab33c15eee780f63d50d--aquamarine-rabanadas-8c832e.netlify.app/'></ProjectItem> 
        
        <ProjectItem img={SecondImg} title='XBOX' desc='I built copy of a website using React and Tailwind that draws inspiration from Xbox'/>
        <ProjectItem img={ThirdImg} title='Metaverse' desc='Website created using Framer Motion.The website features UI and UX interactive animations.' />
        < ProjectItem img={FourthImg} title='Gost Shop' desc='Project that Im particularly proud of is a  website that I built from scratch using React and Redux.'  /> 
      </div>
    </div>
  )
}

export default Projects