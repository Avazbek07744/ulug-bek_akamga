import React, { useState } from 'react'
import img from '../assets/women.jpg'
import arrow from '../assets/top.svg'
import arrow2 from '../assets/bottom.svg'
import micrasoft from '../assets/micrasoft.png'
import oqita from '../assets/oqita-olish.jpg'

const Home = () => {
    const [more, setMore] = useState(false)
    const goToTelegram = () => {
        window.location.href = 'https://t.me/TATU_talaba1';
    };

    const goYoutube = () => {
        window.location.href = 'https://youtube.com/@azizbekabdurahimov-x8j?si=5Yl7KKMDbVoj1kI8';
    };

    return (
        <div className=''>
            <div className='home h-[375px] py-32 text-center'>
                <h1 className='text-8xl font-bold text-white'>Xakimova Saida <br /> Absuraxmon qizi</h1>
            </div>

            <div className='main'>
                <div className='py-5 backdrop-sepia-0 bg-black/5'>
                    <div className='w-[1200px] mx-auto text-white flex gap-10 text-2xl'>
                        <img className='h-64 w-[300px]' src={img} width={300} alt="" />
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
            </div>

            <div className='w-[1200px] mx-auto flex justify-center py-8'>
                <div className="text-center w-72 px-4">
                    <img className='h-64 w-64 mb-1' src={micrasoft} alt="" />
                    <h2 className='text-lg font-semibold py-3 px-2'>Microsoft Office</h2>
                </div>
                <div className="text-center w-72 px-4">
                    <img className='h-64 w-64 mb-1 object-cover' src={oqita} alt="" />
                    <h2 className='text-lg font-semibold py-3 px-2 capitalize'>o'qita olish qobiliyati</h2>
                </div>
            </div>

            <div className="w-[1200px] mx-auto flex justify-center gap-10 py-8 pb-24">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Q5GsRE3gwD0?si=26QWBPyhNsU-oGkV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KuMBJU_aK-E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='bg-[#1E6C93] py-5 flex justify-center gap-36'>
                <button onClick={goToTelegram} className="cursor-pointer px-4 py-2 bg-white rounded capitalize text-[#1E6C93]">telegram</button>
                <button onClick={goYoutube} className="cursor-pointer px-4 py-2 bg-white rounded capitalize text-[#1E6C93]">you tube</button>
            </div>
        </div>
    )
}

export default Home
