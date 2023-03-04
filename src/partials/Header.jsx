import { useState, useEffect, useRef } from 'react'
import { Button, Logo } from '../components'

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    const trigger = useRef(null);
    const mobileNav = useRef(null);
  return (
    <header className='absolute w-full z-30'>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-20 gap-4">
                <div className="shrink-0">
                    <Logo />
                </div>
                {/* Desktop navigation */}
                <nav className='hidden md:flex md:grow'>
                    <ul className="flex grow justify-end items-center flex-wrap">
                        <li><Button className="text-primary hover:text-white">Sign in</Button></li>
                        <li><Button className="bg-primary text-white hover:bg-primary-dark ml-3">Signe up</Button></li>
                    </ul>
                </nav>
                {/* Mobile menu */}
                <nav className="md:hidden">
                    <button 
                        ref={trigger}
                        aria-controls="mobile-nav"
                        aria-expanded={mobileNavOpen}
                        onClick={()=>setMobileNavOpen(prev => !prev)}
                    >
                        Menu
                    </button>
                    {/*Mobile navigation */}
                    <nav
                        id="mobile-nav"
                        ref={mobileNav}
                        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
                        style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.3 } }
                    >
                        <ul className="bg-gray-800 px-4 py-2 rounded">
                            <li><Button className="text-primary hover:text-white w-full">Sign in</Button></li>
                            <li><Button className="bg-primary text-white hover:bg-primary-dark w-full">Signe up</Button></li>
                        </ul>
                    </nav>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header