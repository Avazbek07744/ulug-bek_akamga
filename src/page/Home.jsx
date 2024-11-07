import React, { useState } from 'react'
import img from '../assets/women.jpg'
import arrow from '../assets/top.svg'
import arrow2 from '../assets/bottom.svg'
import micrasoft from '../assets/micrasoft.png'
import video from '../video/vomen-video.MOV'

const Home = () => {
    const [more, setMore] = useState(false)
    return (
        <div className=''>
            <div className='home h-[375px] py-32 text-center'>
                <h1 className='text-8xl font-bold text-white'>Xakimova Saida <br /> Absuraxmon qizi</h1>
            </div>

            <div className='bg-gradient-to-l from-[#7D7570] via-[#7D7570] to-[#263D58] py-5'>
                <div className='w-[1200px] mx-auto text-white flex gap-10 text-2xl'>
                    <img className='h-64 w-[350px]' src={img} width={300} alt="" />
                    <div>
                        {
                            more ?
                                <button
                                    onClick={() => { setMore(false) }}
                                    className='w-[650px] m-7 flex justify-between items-center text-left text-5xl py-3 px-2 font-bold border-b border-[#A39F9F]'>
                                    Men haqimda...
                                    <img src={arrow} width={25} alt="" />
                                </button>
                                :
                                <button
                                    onClick={() => { setMore(true) }}
                                    className='w-[650px] m-7 flex justify-between items-center text-left text-5xl py-3 px-2 font-bold border-b border-[#A39F9F]'>
                                    Men haqimda...
                                    <img src={arrow2} width={25} alt="" />
                                </button>
                        }
                        {
                            more ?
                                <p className='px-6 w-[650px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facilis rem quas exercitationem obcaecati. Totam suscipit atque ipsa nesciunt rerum aliquid maiores veniam labore accusamus doloremque. Nihil unde dolor delectus dolorum officia voluptatum magni aut aliquid, nesciunt quas autem facilis fugiat repudiandae pariatur omnis qui recusandae laboriosam neque! Commodi consequuntur quo totam sequi, dolorum magnam. Laudantium vitae pariatur quia. Libero nisi rerum voluptates. Nesciunt illo vitae ducimus pariatur adipisci facilis, ex aut! Fugiat officiis dignissimos impedit corporis illo autem reprehenderit dolorem quam sit, in, dolor atque? Obcaecati, accusantium odit. Porro corrupti id numquam a vero doloribus rem fuga repellendus facilis!
                                </p> :
                                <p></p>
                        }
                    </div>
                </div>
            </div>

            <div className='w-[1200px] mx-auto flex justify-center pt-8'>
                <div className="text-center w-72 px-4">
                    <img className='h-64 w-64 mb-1' src={micrasoft} alt="" />
                    <h2 className='text-lg font-semibold py-3 px-2'>Microsoft Office</h2>
                </div>
                <div className="text-center w-72 px-4">
                    <img className='h-64 w-64 mb-1' src={micrasoft} alt="" />
                    <h2 className='text-lg font-semibold py-3 px-2 capitalize'>o'qita olish qobiliyati</h2>
                </div>
            </div>

            <div className="">
            </div>
        </div>
    )
}

export default Home
