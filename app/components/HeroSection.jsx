"use client";
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 text-left'>
                <section>
                    <h1 className="text-green-50 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-50'>
                            Welcome!
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'I\'m Christopher R. Long',
                                1300, // wait 1s before replacing
                                'Cloud Platforms Engineer',
                                1000,
                                'Site Reliability Engineer',
                                1000,
                                'Video Game Enthusiast',
                                1000
                            ]}
                            wrapper="span"
                            speed={65}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
                        Lorem ipsum dolor sit amet
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-green-600 hover:bg-green-700 text-white'>
                            Download CV
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-600 to-green-200 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#1e2124] hover:bg-slate-800 rounded-full px-5 py-2 '>Contact Info</span>
                        </button>
                    </div>
                </section>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src={`/portfolio/images/Portrait.jpg`}
                        alt="portfolio portrait"
                        width={300}
                        height={300}
                        style={{ borderRadius: '50%' }}
                        className='absolute transform -translate -x-1/2 -translate-y-1/2 top-1/2 bottom-1/2 px-5 py-5'
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection