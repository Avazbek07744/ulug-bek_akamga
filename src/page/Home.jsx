import React, { useState } from 'react';
import img from '../assets/women.jpg';
import arrow from '../assets/top.svg';
import arrow2 from '../assets/bottom.svg';
import micrasoft from '../assets/micrasoft.png';
import oqita from '../assets/oqita-olish.jpg';

const Home = () => {
    const [more, setMore] = useState(false);

    const goToTelegram = () => {
        window.location.href = 'https://t.me/Saida_Khakimova';
    };

    const goYoutube = () => {
        window.location.href = 'https://youtube.com/@azizbekabdurahimov-x8j?si=5Yl7KKMDbVoj1kI8';
    };

    return (
        <div className="w-full">
            <div className="home h-[375px] py-20 text-center flex items-center justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#333]">
                    Xakimova Saida <br /> Abduraxmon qizi
                </h1>
            </div>

            <div className="main">
                <div className="py-5 backdrop-sepia-0 bg-black/5">
                    <div className="w-full lg:w-[700px] mx-auto flex flex-col lg:flex-row gap-8 lg:pl-10 text-2xl">
                        <img
                            className="h-64 w-56 mx-auto lg:w-[250px] object-cover"
                            src={img}
                            alt="Women"
                        />
                        <div className=''>
                            <button
                                onClick={() => setMore(!more)}
                                className="text-[#333] w-full md:w-[450px] px-12 mx-auto flex justify-between items-center text-left text-3xl md:text-4xl lg:text-5xl py-3 font-bold border-b border-[#A39F9F]"
                            >
                                Men haqimda...
                                <img src={more ? arrow : arrow2} width={25} alt="Arrow" />
                            </button>
                            {more && (
                                <p className="text-[#333] px-12 md:px-6 w-full md:w-[650px] mt-4">
                                    Мен Хакимова Саида Абдурахмоновна 1982 - йил 7-январда Фаргона
                                    вилояти Кувасой шахрида зиёлилар оиласида тугилганман. <br />
                                    Кукон Универститетининг Бошлангич таьлим 4 - боскич талабасиман. <br />
                                    Хозирда Фаргона вилояти Фаргона шахри 45- умумий урта таьлим
                                    мактаби бошлангич таьлим укитувчисиман. <br />
                                    Оилаликман 3 нафар фарзандим бор.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-[700px] mx-auto flex flex-wrap justify-center gap-8 py-8">
                <div className="text-center w-64 px-4">
                    <img className="h-64 w-full mb-2 bg-center	 object-cover" src={micrasoft} alt="Microsoft" />
                    <h2 className="text-lg font-semibold py-2">Microsoft Office</h2>
                </div>
                <div className="text-center w-64 px-4">
                    <img
                        className="h-64 w-full mb-2 object-cover"
                        src={oqita}
                        alt="Teaching skills"
                    />
                    <h2 className="text-lg font-semibold py-2 capitalize">o'qita olish qobiliyati</h2>
                </div>
            </div>

            <div className="w-full lg:w-[700px] lg:px-8 sm:px-10 px-10 mx-auto flex flex-col lg:flex-row lg:pl-10 gap-8 justify-center py-8">
                <iframe
                    width="100%"
                    height="315"
                    className="lg:w-[320px] lg:h-[180px] md:h-[250px]"
                    src="https://www.youtube.com/embed/Q5GsRE3gwD0?si=26QWBPyhNsU-oGkV"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="100%"
                    height="315"
                    className="lg:w-[320px] lg:h-[180px] md:h-[250px]"
                    src="https://www.youtube.com/embed/KuMBJU_aK-E"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="bg-[#1E6C93] py-5 flex flex-wrap justify-center gap-6">
                <button
                    onClick={goToTelegram}
                    className="cursor-pointer px-6 py-2 bg-white rounded capitalize text-[#1E6C93]"
                >
                    Telegram
                </button>
                <button
                    onClick={goYoutube}
                    className="cursor-pointer px-6 py-2 bg-white rounded capitalize text-[#1E6C93]"
                >
                    YouTube
                </button>
            </div>
        </div>
    );
};

export default Home;
