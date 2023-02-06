import React from 'react'

import FirstImg from '../assets/FirstProject.jpg'
import SecondImg from '../assets/SecondProject.jpg'
import ThirdImg from '../assets/ThirdProject.jpg'
import FourthImg from '../assets/FourthProject.jpg'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>

      <p className='text-center py-8 font-bold'>My modern pro</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={FirstImg} title='T App' />
        <ProjectItem img={SecondImg} title='Ti App' />
        <ProjectItem img={ThirdImg} title='Tit App' />
        <ProjectItem img={FourthImg} title='Titl App' />
      </div>
    </div>
  )
}

export default Projects