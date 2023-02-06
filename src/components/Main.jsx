import React from 'react'
import Me from '../assets/Me.jpeg'
import { TypeAnimation } from 'react-type-animation'
import {FaGithub,FaInstagram,FaLinkedinIn, FaFacebook} from 'react-icons/fa'

function Main() {
  return (
    <div  id='main'>
       <img className='w-full h-screen     bg-cover object-left scale-x-[-1]' src={Me} alt="/" />
    <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        
        <h1 className='sm:text-4xl font-bold text-gray-800'>I'm Strahinja</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
        <TypeAnimation
      sequence={[
        'Frontend Developer', 
        3000, 
        'Software Developer',
        3000, 
        'Software Engineer',
        3000,
      
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <a href="https://github.com/StrahinjaWebDev">
          <FaGithub className='cursor-pointer' size={25} /> </a>
          <a href="https://www.linkedin.com/in/strahinjavujinovic/">
          <FaLinkedinIn className='cursor-pointer' size={25} /></a>
          <a href="https://www.instagram.com/vujiiin/">
          <FaInstagram className='cursor-pointer' size={25} /></a>
          <a href="https://www.facebook.com/strahinja.vujinovic.1/">
          <FaFacebook className='cursor-pointer' size={25} /></a>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Main