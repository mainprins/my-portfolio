import React from 'react'

const AboutPage = (props) => {
  return (
    <div className='bg-stone-900 w-full flex px-30 py-6 gap-14 flex-col' ref={props.pageRef}>
       <div id="top" className='w-full flex flex-col md:gap-0 gap-6 md:flex-row justify-between'>
          <button className='bg-[#66a586] p-3 md:hidden w-[115px] rounded-xl text-nowrap text-white hover:bg-stone-900 hover:ring-1 hover:ring-[#66a586] cursor-pointer transition all duration-500'>Download CV</button>
          <span className='font-bold text-white text-4xl tracking-widest'>TECH STACK</span>
          <a className='text hidden md:block' href='/myCV.pdf' download>DOWNLOAD CV</a>
          
       </div>
       <div id="bottom" className='flex flex-col md:flex-row flex-wrap gap-6 md:gap-0 md:justify-between '>
          <figure className='bg-linear-to-bl from-[#353d8d] to-black w-[100%] md:w-[20%] min-h-40 flex justify-center items-center rounded-xl'>
             <img src="/react.svg" className='w-1/2 h-1/2' alt="React" />
          </figure>
          <figure className='bg-linear-to-bl from-[#358d44] to-black w-[100%] md:w-[20%] min-h-40 flex justify-center items-center rounded-xl'>
             <img src="/node.svg" className='w-1/2 h-1/2' alt="React" />
          </figure>
          <figure className='bg-linear-to-bl from-[#000000] to-[#fff] w-[100%] md:w-[20%] min-h-40 flex justify-center items-center rounded-xl'>
             <img src="/express.svg" className='w-1/2 h-1/2' alt="React" />
          </figure>
          <figure className='bg-linear-to-bl from-[#0d7947] to-black w-[100%] md:w-[20%] min-h-40 flex justify-center items-center rounded-xl'>
             <img src="/mongo.svg" className='w-1/2 h-1/2' alt="React" />
          </figure>
       </div>
    </div>
  )
}

export default AboutPage