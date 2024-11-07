import React from 'react'
import img from '../assets/women.jpg'
import warming from '../assets/warning.svg'

const MainLeout = ({ children }) => {
    return (
        <div>
            <header className='fixed w-full flex gap-5 items-center'>
                <img className='py-2 pe-1 ps-3' src={img} width={56} height={56} alt="women image" />
                <h2 className='text-2xl text-white font-semibold'>S. Xakimova</h2>
            </header>

            <div className='h-[92vh] w-full'>
                {children}
            </div>

            <footer className='fixed w-full p-2'>
                <img src={warming} width={30} alt="" />
            </footer>
        </div>
    )
}

export default MainLeout
