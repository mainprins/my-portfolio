import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const HomePage = (props) => {
  const containerRef = useRef();
  const lettersRef = useRef([]);
  const leftRef = useRef();
  const rightRef = useRef();
  const imgRef = useRef();

  // Clear refs only once when the component mounts
  lettersRef.current = [];

  useGSAP(() => {
    gsap.from(leftRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(rightRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });

    gsap.from(imgRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.8
    });

    gsap.from(lettersRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    });
  }, { scope: containerRef });

  return (
    <div
      className='flex flex-col gap-20 md:gap-0 md:flex-row flex-wrap p-6 md:p-4 w-[100vw] bg-stone-900 text-white'
      ref={(el) => {
        containerRef.current = el;
        props.pageRef.current = el;
      }}
    >
      <div
        id="left"
        className='w-full mt-[20vh] md:w-1/2 md:mt-0 md:h-[100vh] min-h-150 flex flex-col gap-5 justify-center px-30'
        ref={leftRef}
      >
        <span className='text-[#66a586] 2xl:block hidden font-bold tracking-widest text-xl md:text-2xl web'>
          WEB DEVELOPER
        </span>
        <span className='text-[#66a586] 2xl:hidden font-bold tracking-widest text-xl md:text-2xl'>
          WEB DEVELOPER
        </span>
        <span className='font-bold tracking-widest text-4xl md:text-6xl text-nowrap'>
          {'PRINCE'.split('').map((char, i) => (
            <span key={i} className='inline-block' ref={el => lettersRef.current[i] = el}>
              {char}
            </span>
          ))}
        </span>
        <p className='tracking-widest'>I am a MERN stack developer.</p>
        <button
          className='bg-[#66a586] p-3 rounded-xl w-[110px] md:w-[15vw] xl:w-[8vw] hover:ring-1 text-nowrap hover:bg-stone-900 hover:ring-[#66a586] transition-all duration-500 cursor-pointer'
          onClick={() => { props.handleScroll(props.contactRef) }}
        >
          Contact Me
        </button>
      </div>

      <div
        id="right"
        className='w-full md:w-1/2 md:h-[100vh] flex items-center'
        ref={rightRef}
      >
        <div className='w-full h-full flex justify-center items-center'>
          <figure className='w-[50%] profile rounded-full' ref={imgRef}>
            <img src="/bajgain.jpg" alt="myPhoto" className='w-full h-full rounded-full' />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
