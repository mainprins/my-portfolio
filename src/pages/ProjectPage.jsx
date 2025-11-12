import React, { useState } from 'react'

const projects = [
    {
        tagline: "CHAT APPLICATION",
        name: "CHATTILY",
        desc: "It's a mern stack chatting app.",
        src: "/messages.png"
    },
    {
        tagline: "RESUME CREATOR",
        name: "MeroResume",
        desc: "It's a AI powered resume creator.",
        src: "/meroResume.png"
    },
]

const ProjectPage = (props) => {

    const [index, setIndex] = useState(0);

    const handleNextButton = () => {
        if (index < projects.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    const handlePrevButton = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(projects.length - 1);
        }

    }
    return (
        <div className='flex flex-col gap-20 md:gap-0 md:flex-row flex-wrap p-6 md:p-4 w-[100vw] bg-stone-900 text-white' ref={props.pageRef}>
            <div id="left" className='w-full mt-[20vh] md:w-1/2 md:mt-0 md:h-[100vh] min-h-60 flex flex-col gap-5 justify-center px-30'>
                <span className='text-[#66a586] font-bold tracking-widest text-xl md:text-2xl'>{projects[index].tagline}</span>
                <span className='font-bold tracking-widest text-2xl md:text-3xl xl:text-6xl'>{projects[index].name}</span>
                <p className='tracking-widest'>{projects[index].desc}</p>
                <div className='flex gap-4'>
                    <button className='p-3 rounded-xl w-[110px] md:w-[15vw] xl:w-[8vw]  text-nowrap ring-1 ring-[#66a586] bg-stone-900 hover:bg-[#66a586] transition-all duration-500 cursor-pointer' onClick={handlePrevButton}>Prev</button>
                    <button className='bg-[#66a586] p-3 rounded-xl w-[110px] md:w-[15vw] xl:w-[8vw] hover:ring-1 text-nowrap hover:bg-stone-900 hover:ring-[#66a586] transition-all duration-500 cursor-pointer' onClick={handleNextButton}>Next</button>
                </div>
            </div>
            <div id="right" className='w-full md:w-1/2 md:h-[100vh] flex items-center'>
                <div className='w-full h-full flex justify-center items-center'>
                    <figure className='xl:w-[80%] md:w-[60%] profile rounded-xl overflow-hidden'>
                        <img src={projects[index].src} alt="myPhoto" className='w-full h-full' />
                    </figure>

                </div>
            </div>
        </div>
    )
}

export default ProjectPage