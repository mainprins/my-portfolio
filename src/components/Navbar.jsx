import { Menu, X } from 'lucide-react'
import { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


const Navbar = (props) => {
    const navMenu = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useGSAP(()=>{
          gsap.from(navMenu.current, { opacity: 0, x: -400, duration: 1 })
    },[isMenuOpen])

    return (
        <>
            <nav className='bg-stone-900 fixed top-0 z-50 w-[100vw] min-h-10 py-8 px-8 md:px-12 xl:px-14 text-white flex justify-between items-center'>
                <div id="right">
                    <span className='text-white font-bold text-4xl tracking-widest cursor-pointer' onClick={()=>{window.location.reload()}}>P<span className='text-[#66a586]'>.</span></span>
                </div>
                <div id="middle">
                    {isMenuOpen ? <X className='hover:text-[#66a586] transition-all duration-500 cursor-pointer' size={40} onClick={() => { setIsMenuOpen(false) }} />
                        : <Menu size={40} className='hover:text-[#66a586] transition-all duration-500 cursor-pointer' onClick={() => { setIsMenuOpen(true) }} />}
                </div>
                <div id="left">
                    <button className='bg-stone-900 ring-1 ring-[#66a586] hover:bg-[#66a586] hover:ring-0 text-white p-4 transition-all duration-500 rounded-xl cursor-pointer' onClick={()=>{props.handleScroll(props.contactRef); setIsMenuOpen(false)}}>Hire Me</button>
                </div>
            </nav>
            {isMenuOpen &&
                <div className='fixed z-40 justify-center items-center flex flex-col gap-6 bg-stone-900 text-white top-0 w-[100vw] h-[100vh] left-0' ref={navMenu}>
                    <span className='font-bold text-4xl hover:text-[#66a586] transition-all duration-500 tracking-widest cursor-pointer' onClick={()=>{props.handleScroll(props.homeRef); setIsMenuOpen(false)}}>Home</span>
                    <span className='font-bold text-4xl hover:text-[#66a586] transition-all duration-500 tracking-widest cursor-pointer' onClick={()=>{props.handleScroll(props.aboutRef); setIsMenuOpen(false)}}>About</span>
                    <span className='font-bold text-4xl hover:text-[#66a586] transition-all duration-500 tracking-widest cursor-pointer' onClick={()=>{props.handleScroll(props.projectRef); setIsMenuOpen(false)}}>Projects</span>
                    <span className='font-bold text-4xl hover:text-[#66a586] transition-all duration-500 tracking-widest cursor-pointer' onClick={()=>{props.handleScroll(props.contactRef); setIsMenuOpen(false)}}>Contact</span>
                </div>
            }

        </>
    )
}

export default Navbar