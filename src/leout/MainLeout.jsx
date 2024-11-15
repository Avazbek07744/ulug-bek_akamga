import React from 'react'
import img from '../assets/women.jpg'
import warming from '../assets/warning.svg'

const MainLeout = ({ children }) => {
    return (
        <div>
            <header className="fixed w-full flex gap-5 items-center px-3 py-2 backdrop-sepia-0 bg-black/15">
                <img className="w-14 h-14 object-cover" src={img} alt="Women image" />
                <h2 className="text-xl md:text-2xl text-[#333] font-semibold">S. Xakimova</h2>
            </header>

            <div className='h-[92vh] w-full'>
                {children}
            </div>

            <footer className='fixed p-2'>
                <img className='bg-white rounded-full' src={warming} width={30} alt="" />
            </footer>
        </div>
    )
}

export default MainLeout
